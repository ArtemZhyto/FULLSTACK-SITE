from django.urls import path, include
from .models import ProductGetResource, RemoveFromBasket, ClearBucket, AddToBasket, UpdateUser, UserRegistrationResource, UserGetResource, CreateProductResource, EnterUser
from tastypie.api import Api

# api = Api(api_name="products")
# api.register(ProductGetResource())
# api.register(CreateProductResource())
urlpatterns =  [
    path("", include(UserRegistrationResource().urls), name="registration"),
    path("", include(UserGetResource().urls), name="user"),
    path("", include(CreateProductResource().urls), name="create" ),
    path("", include(ProductGetResource().urls)),
    path("", include(EnterUser().urls)),
    path("", include(UpdateUser().urls)),
    path("", include(AddToBasket().urls)),
    path("", include(ClearBucket().urls)),
    path("", include(RemoveFromBasket().urls))
]   