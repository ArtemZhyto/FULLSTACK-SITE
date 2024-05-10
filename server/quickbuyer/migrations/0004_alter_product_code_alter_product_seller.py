# Generated by Django 4.0.8 on 2024-05-07 13:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quickbuyer', '0003_alter_product_code_alter_product_seller'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='code',
            field=models.IntegerField(default=462625),
        ),
        migrations.AlterField(
            model_name='product',
            name='seller',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='quickbuyer.user'),
        ),
    ]
