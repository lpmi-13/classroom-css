# Classroom CSS competition

The absolute best part of teaching HTML/CSS to students is that
first time they see a change they made show up in the browser.
Some of the students get to that point faster than others (based
on how long it takes to set up a text editor, explain what HTML
and CSS are, explain how to save a file as \*.html, etc), though
this Student Time to First Paint is useful classroom
performance metric, and should be reduced to as low as possible.

Also, in any class, there will be a mix of students who progress
a bit faster than others, and so this necessarily leads to a 
need for differentiated instruction. Groupwork pairing more and less advanced students is one way to accomplish this, and the merits
of friendly competition in class activities (when the students
enjoy it and are motivated by it), is well documentated. So why
not combine these?

## the activity

The idea is that the class could be split into two groups, with
the more advanced students using the keyboard, fielding suggestions
from the other team members. Once this project is set up on the
two different machines, the students will be able to update the
CSS, and a third computer (possibly connected to a projector) can
show the teams' work in real time.

This isn't intended as the first exposure to CSS, but could very
well be integrated as a reinforcement activity, either recycling
or extending the main learning objectives introduced in that
lesson (or any previous lessons, as appropriate).

## content

This proof of concept is using the course materials from the
second session of the Code First Girls materials, and targets
learning objectives involving CSS.

## technical details

Using a simple react app with a webpack dev server, the changes in the local file system are connected to a volume in the docker container, which itself is running ngrok to pipe it out to a public URL.

The machine connected to the display could then open two different browser windows, each on one half of the screen, to show the two teams' pages updating as they save their changes.
