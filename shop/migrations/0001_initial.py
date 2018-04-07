# Generated by Django 2.0.3 on 2018-04-01 09:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Good',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('description', models.CharField(max_length=1000)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/goods/')),
                ('value', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.DecimalField(decimal_places=1, max_digits=2)),
                ('good', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.Good')),
            ],
        ),
    ]
