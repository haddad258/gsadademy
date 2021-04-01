from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

webdriver = webdriver.Chrome(executable_path="C:\drivers\chromedriver.exe")
""" 
driver.get("http://google.com")
time.sleep(0.01)
e = driver.find_element_by_name("q").send_keys("125232")
time.sleep(5)
driver.close() """

webdriver.get("Welcome to Python.org")
python_title = webdriver.title
print(python_title)
webdriver.get(python_title)
webdriver.get("http://perl.org")