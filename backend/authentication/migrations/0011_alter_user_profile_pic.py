# Generated by Django 4.0.4 on 2022-05-12 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0010_alter_user_profile_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(default='images/default.jpeg', upload_to='images'),
        ),
    ]
