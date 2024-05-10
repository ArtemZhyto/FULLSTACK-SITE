from django.db import models
from tastypie.resources import ModelResource
from tastypie import fields
# Create your models here.
from quickbuyer.models import Product, User
from .authorization import CustomAuthnentication
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import Authorization
from tastypie.http import HttpUnauthorized
from tastypie.resources import Resource
from django.contrib.auth import authenticate
from django.http import JsonResponse
from tastypie.authorization import Authorization
from json import loads, dumps

class UserGetResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = "users"
        allowed_methods = [
            "get"
        ]

        authentication = CustomAuthnentication()
        authorization = Authorization()


class CreateProductResource(ModelResource):
    class Meta:
        queryset = Product.objects.all()
        resource_name = "createproduct"
        allowed_methods = [
            "post"
        ]
        authentication = CustomAuthnentication()
        authorization = Authorization()

    def hydrate(self, bundle):
        bundle.obj.seller_id = bundle.data["seller_id"] 
        seller_id = bundle.data['seller_id']
        seller = User.objects.get(id=seller_id)
        seller.sold +=1
        seller.save()
        bundle.obj.seller_id = seller_id
        return bundle
    
class ClearBucket(ModelResource) :
    class Meta:
        queryset = User.objects.all()
        resource_name = "clearbucket"
        allowed_methods = ["post"]
        authentication = CustomAuthnentication()
        authorization = Authorization()
    
    def obj_create(self, bundle, **kwargs):
        user_id = bundle.data["user_id"]
        if user_id:
            try:
                user = User.objects.get(id=user_id)
                user.products = "[]"
                user.save()
                return bundle
            except User.DoesNotExist:
                raise ValueError("Пользователь с указанным id не найден")
        else:
            raise ValueError("Id не указан")

class AddToBasket(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = "addtobasket"
        allowed_methods = ["post"]
        authentication = CustomAuthnentication()
        authorization = Authorization()
    
    def obj_create(self, bundle, **kwargs):
        user_id = bundle.data["user_id"]
        product_id = bundle.data["product_id"]
        
        if user_id and product_id:
            try:
                user = User.objects.get(id=user_id)
                products_list = loads(user.products)
                products_list.append(product_id)
                user.products = dumps(products_list)
                user.save()
                return bundle
            except User.DoesNotExist:
                raise ValueError("Пользователь с указанным id не найден")
            except Product.DoesNotExist:
                raise ValueError("Продукт с указанным id не найден")
        else:
            raise ValueError("Id не указан")

class RemoveFromBasket(ModelResource) :
    class Meta:
        queryset = User.objects.all()
        resource_name = "removefrombusket"
        allowed_methods = ["post"]
        authentication = CustomAuthnentication()
        authorization = Authorization()
    
    def obj_create(self, bundle, **kwargs):
        user_id = bundle.data["user_id"]
        product_id = bundle.data["product_id"]
        
        if user_id and product_id:
            try:
                user = User.objects.get(id=user_id)
                products_list = loads(user.products)
                filtered_list = []
                for product in products_list :
                    if not product == product_id :
                        filtered_list.append(product)
                user.products = dumps(filtered_list)
                user.save()
                return bundle
            except User.DoesNotExist:
                raise ValueError("Пользователь с указанным id не найден")
            except Product.DoesNotExist:
                raise ValueError("Продукт с указанным id не найден")
        else:
            raise ValueError("Id не указан")

class ProductGetResource(ModelResource):
    seller = fields.ForeignKey(UserGetResource, "seller")
    class Meta:
        queryset = Product.objects.all()
        resource_name = "products"
        allowed_methods = [
            "get"
        ]
        authentication = CustomAuthnentication()
        authorization = Authorization()
    def hydrate(self, bundle):
        bundle.obj.seller = bundle.data["seller"] 
        return bundle
    def dehydrate(self, bundle):
        bundle.data["seller"] = bundle.obj.seller
        return bundle


class UserRegistrationResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = "registration"
        allowed_methods = [
            "post"
        ]
        authentication = CustomAuthnentication()
        authorization = Authorization()

    def hydrate(self, bundle):
        if User.objects.filter(mail=bundle.data["mail"]):
            raise TypeError("object already exists!!")
        else:
            return bundle


class EnterUser(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = "enter"
        allowed_methods = [
            "get"
        ]

    def obj_get_list(self, bundle):
        user_password = bundle.request.GET.get("user_password")
        user_email = bundle.request.GET["user_email"]
        if user_email and user_password:
            result = User.objects.filter(
                mail=user_email, password=user_password)
            return result
        else:
            print("ERRR")
            return bundle
    # http://127.0.0.1:8000/enter/?user_password=C5w_21N8o&user_email=vkohrdingv@admin.ch


class UpdateUser(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = "update"
        allowed_methods = [
            "post"
        ]
        authentication = CustomAuthnentication()
        authorization = Authorization()


        def obj_create(self, bundle, request=None, **kwargs):
            user_id = bundle.data["id"]
            try:
                matched_user = User.objects.filter(id=user_id)
                if matched_user :
                  bundle.obj = User(name=matched_user.name, mail=matched_user.mail, password=matched_user.password, registr_data=matched_user.registr_data, sold=matched_user.sold, contact_mail=matched_user.contact_mail,
                                  phone=matched_user.phone, region=matched_user.region, allowNotifications=matched_user.allowNotifications, instagram=matched_user.instagram, products=matched_user.products, image=matched_user.image)
                  bundle.obj.save()
                  return bundle
                else :
                  raise NameError("Cannot fing object with that id ")
            except:
                print("err")
