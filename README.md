# my-explorer
My goal with this project is to make a new type of file explorer. It's incredibly difficult on current file explorers to tranfer files to parent and sibiling directories, or even see what's inside of your child directories.
The idea of this project is to provide a visual interface which displays information about the files and folders around you in a more efficient manner.

#Technology
Built on NW.js. 
Used chokidar.js to track the file system

# Issues
Unfortunately I ran into an issue with tracking the files on Windows. Unfortunately, the application would crash without any sort of information -- No stack trace. I assumed it was a segfault then, but unfortunately there's absolutely no way to track segfaults on Windows. After hitting that deadend, I switched focus to another project.


