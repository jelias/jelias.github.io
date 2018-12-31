---
layout: project
title: Täble
team: <a href="http://timothydkwan.com/">Tim Kwan</a>
date: 2018-12-13
type: Interaction
thumbnail: /assets/images/cards/table.png
order: 2

---
{% include captures.md %}

{{ main }}
**Overview:** \\
Tasked with exploring the possibilities of physical computing, we created Täble, an interactive dinner table that creates a warmer dining experience. In this project, we observed what data humans create during a dinner party and worked with existing hardware and software to build a functioning prototype. 

**Context:**\\
8 Weeks, Physical Computing Course, University of Washington

**What I did:**\\
User Research, Sensing and Computer Logic
{{end}}
{{wide}}
<div style="position:relative;padding-top:54.5%;margin-bottom: 4rem;margin-top: 4rem;">
  <iframe src="https://player.vimeo.com/video/306063328" frameborder="0" allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
</div>


![Final prototype](/assets/images/projects/table/finished-product.png)
{{end}}

{{main}}
#### Life around the table
Food is at the heart of culture, as friends and family share life around the table we set out to  honor these moments. Working to encourage connection and heighten the dining experience we explored a number of ideas. From tables that shrunk when no one is talking to a puzzle that only unlocked the food when everyone worked together, täble was born.
{{end}}
{{wide}}

![og-sketch](/assets/images/projects/table/og-sketch.png)
{{end}}

{{main}}
#### Our Approach
###### The Idea
We decided to keep our idea simple, and focused on creating a connection through the physical environment. Drawn to the aesthetics of backyard dinner parties, we used string lights to help shape the atmosphere of the meal. As more guests gathered around the table, the lighting and dining experience became warmer. Once everyone was eating, Täble would work to capture the peak moments of the meal to help users remember their time together long after that night.

{{end}}
{{wide}}
![polaroid](/assets/images/projects/table/polaroid.png)
{{end}}

{{main}}
###### Detecting a photo-worthy moment
Based on our observations and experiences, we discussed how a memorable moment might be detected. First we considered sensing the vibrations of the table to detect a big spill or table slap, then weight sensors to determine how much of the meal was left, and finally microphones to track the volume levels. We began by calculating an average volume level of the meal so we could detect any large spikes in volume. For example, when the whole table laughed at a joke, cheered or raised their voices in celebration, that variation from the dinner’s average volume level would trigger the camera, capturing the moment in real time.
{{end}}

{{wide}}
![protoyping](/assets/images/projects/table/protoyping.png)

{{end}}
{{main}}
###### My role
As an interaction designer drawn to how people interact with one another, I worked to understand the data and signals people produce and create the logic that would allow the computer to react appropriately. Through observations and research, I combined the components necessary for the sensing and processing of the table. I chose IR sensors to count the number of people and microphones to average and detect the volume levels. With the proper data being collected, I was also able to assist in the actuation components, working with a servo motor for the Polaroid and Power Tail Switch to adjust the string lights.
{{end}}
{{full}}


![final-wide](/assets/images/projects/table/final-wide.png)
{{end}}
{{wide}}

{{end}}
{{main}}
###### Reflection
Working with limited knowledge of electrical engineering and programming, I am quite proud of our final prototype. While the lights occasionally flickered and the Polaroid was not always in focus, Täble was an effective prototype, allowing us to explore an idea and understand how users would react to it, the first step in building a full product. Moreover, I furthered my ability to convert abstract ideas into actionable information. Going forward, I am excited to continue exploring how technology and the data we produce can be used to forge human connection around the world.

{{end}}

{{wide}}
![tim and jacob final](/assets/images/projects/table/team-polaroid.png)
{{end}}
