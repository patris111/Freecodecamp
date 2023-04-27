import os

print("Convert file type from: ")
fromFileType = '.'
fromFileType += input()
print("Convert file type to: ")
toFileType = '.'
toFileType += input()

#find input contains character. 
for filename in os.listdir(os.path.dirname(os.path.abspath(__file__))):
  base_file, ext = os.path.splitext(filename)
  if ext == fromFileType: os.rename(filename, base_file + toFileType)