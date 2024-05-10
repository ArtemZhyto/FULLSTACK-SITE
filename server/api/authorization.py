from tastypie.authentication import ApiKeyAuthentication

class CustomAuthnentication(ApiKeyAuthentication) :
  def is_authenticated(self, request, **kwargs):
    if request.method == "GET" :
      return True
    print("reguest is" , request, "kwargs are", kwargs, "self is", self)
    # print("response is", super().is_authenticated(request, **kwargs))
    return super().is_authenticated(request, **kwargs)
  