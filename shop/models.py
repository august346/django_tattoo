from django.db import models


# Create your models here.
class Good(models.Model):

    name = models.CharField(max_length=200)
    price = models.DecimalField(decimal_places=2, max_digits=20)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='images/goods/', blank=True, null=True)
    value = models.IntegerField()

    def __str__(self):
        return self.name



class Rate(models.Model):
    rate = models.DecimalField(decimal_places=1, max_digits=2)
    good = models.ForeignKey(Good, on_delete=models.CASCADE)