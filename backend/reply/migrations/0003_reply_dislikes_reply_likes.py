# Generated by Django 4.0.4 on 2022-05-10 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reply', '0002_alter_reply_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='reply',
            name='dislikes',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='reply',
            name='likes',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]