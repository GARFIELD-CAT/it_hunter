# Generated by Django 3.2.25 on 2024-06-10 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("companies", "0002_auto_20240610_2149"),
    ]

    operations = [
        migrations.AlterField(
            model_name="company",
            name="sector",
            field=models.ManyToManyField(
                blank=True,
                help_text="Выберите отрасли компании",
                related_name="companies",
                to="companies.Sector",
                verbose_name="секторы",
            ),
        ),
    ]
