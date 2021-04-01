# Gif Fit

Gif Fit builds randomized workouts for you that you can do without any equipment in your home. 

**Live Site:** [GIF FIT](https://gif-fit.netlify.app/)

![GIF-FIT](https://user-images.githubusercontent.com/47455758/113356938-b2940a80-9308-11eb-9c8c-51882a685611.jpg)

Select how many exercises you want to perform, how long each one lasts, the rest period in between and total number of rounds. Gif Fit will keep track of each move for you and let you know when to rest and prepare for the next exercise. 

Features a React front-end, Redux to manage state, and Material UI for styling. 

Gifs are sourced from Giphy.com (special thanks and credit to 8fit for uploading so many awesome exercises). 

Made with love to genuinely help others during these stressful and challenging times.

## How It's Made

- React.js
- Redux state management
- Material UI components and styles
- React hooks useState and useEffect
- Gifs sourced from Giphy.com (special thanks and credit to 8fit)
- Made with love to genuinely help others during these stressful and challenging times

## Lessons Learned

- The timers were especially challenging. I had to figure out how to sync up the correct timers (start, workout and rest) with the array of exercise gifs, and have them cycle through each timer at the right time. I achieved this with multiple useEffects, based on user input for rest time, workout time, total number of rounds, etc. 

## Run Locally

1. In command line run 'git clone git@github.com:jamesncox/gif-fit.git'
2. CD into 'gif-fit'
4. Run 'yarn install'
5. Run 'yarn start'
6. Enjoy!
