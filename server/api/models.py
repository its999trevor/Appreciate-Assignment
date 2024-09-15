from django.db import models

# Create your models here.
class Faq(models.Model):
    faqs_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title
