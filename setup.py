from setuptools import setup

name = "maldives_compliance"

setup(
    name="maldives_compliance",
    version="1.0.0",
    description="Compliance validations and tax structure for Maldives GST (8%) and TGST (17%)",
    author="shuhain85",
    author_email="shuhain.ismail@gmail.com",
    packages=find_packages(include=['maldives_compliance', 'maldives_compliance.*']),
    include_package_data=True,
    zip_safe=False,
    install_requires=[],
)