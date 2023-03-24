@echo off
setlocal enabledelayedexpansion
set "list="
for %%i in (*.*) do (
  set "filename=%%~nxi"
  set "list=!list! 'media/!filename!'"
)
echo ^<^<preload %list%^>^> > list.txt