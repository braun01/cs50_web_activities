# Generated by Django 5.0.2 on 2024-02-20 19:45

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('age', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)])),
                ('eye_color', models.CharField(choices=[('Green', 'Green'), ('Blue', 'Blue'), ('Brown', 'Brown')], max_length=5)),
            ],
        ),
    ]