---
layout: project
title: arc
one-liner: a collaborative installation in AI and generative filmmaking
date: 2020-06-20
type: Interaction
thumbnail: /assets/images/cards/arc.png
order: 1

---
{% include captures.md %}

<!-- @todo JE, need to create a "case study hidden project? 
the landing page should be a short form, more like Shortverse, a marketing pitch -->
{{ main }}
In the spring of 2020, as we reluctantly entered a world filtered through the lens of technology, I rewrote my graduating thesis. Grappling with the notions of humanity, I set out to explore how human nature could engage with the futures of technology. 

**Arc is a functioning AI model and speculative experience that enables people to generate entirely original films through collaboration with artificial intelligence.**

<!-- **The result is an operating AI model and speculative experience that fosters collaboration between people and artificial intelligence to generate entirely original films.** -->

[Collaborate Arc to Create a Film](https://arc.jelias.me)
{{end}}

{{main}}
![arc.jelias.me](/assets/images/projects/arc/landing.png)
![image](/assets/images/projects/arc/shapes.png)
<p>The craziest data viz I've ever built: An input to generate stories.</p>{:.caption}

<!-- <p>Built on the premise that each story possesses a distinct shape, this technology allows users to effortlessly guide the narrative arc of their film by manipulating its mood.</p>{:.caption} -->

Built on the premise that each story possesses a distinct shape, this technology allows users to effortlessly guide the narrative arc of their film by manipulating its mood. Through analyzing the nuanced ambiance and atmosphere within a movie clip, arc intelligently maps an extensive film library to follow your chosen shape, resulting in an entirely unique story.

<!--
Arc is a installation that empowers users to generate films by collaborating with AI. Built on the premise that each story possesses a distinct shape, this technology allows users to effortlessly guide the narrative arc of their film by manipulating its mood. Through analyzing the nuanced ambiance and atmosphere within a movie clip, arc intelligently maps an extensive film library to follow your chosen shape, resulting in an entirely unique story. 
 -->
{{end}}
{{full}}
![arc.jelias.me](/assets/images/projects/arc/animations.png){:.no-shadow}
{{end}}

{{main}}
<p>Loading screens become a valuable medium to help explain what is happening in the background.</p>{:.caption}
{{end}}

{{main}}
![research](/assets/images/projects/arc/flim.png)
###### Research
![research](/assets/images/projects/arc/research.png)
![papers](/assets/images/projects/arc/papers.png)
<p>So many papers, emerging tools, essays on film theory, colab notebooks, prototypes, animations...</p>{:.caption}

<!-- This project was 10 weeks, of research, learning about ai, cinematic moods, systems, and python, exploring, prototyping, training round 1 (50% accurate), testing, training round 2 (90% accuracy!), building, compiling, running (scripts and models), animating, and polishing. -->

###### Building the Model
Constructing and training a computer vision model is an arduous and intricate endeavor that involves careful consideration. The inputs and training data directly shape the model's characteristics. If biased or inadequate data is used during training, the AI will inevitably mirror these shortcomings. The initial training of arc proved disastrous. Weeks of exhaustive image analysis and labeling left me confused and exhausted, resulting in a model that achieved only 50% accuracy in mood classification. Why? My classifiers lacked the necessary distinctiveness and thoughtful curation.

<!-- Training an AI is a pivotal step often overlooked nowadays, yet it holds tremendous significance. The inputs and training data directly shape the model's characteristics. If biased or inadequate data is used during training, the AI will inevitably mirror these shortcomings. And the initial training data for arc was exactly that, inadequate. I had no clear definition of classifiers, and a murky understanding of mood at best, which resulted in a poorly performing AI :( -->

![moods](/assets/images/projects/arc/moods.png)
![ai-tests](/assets/images/projects/arc/ai-tests.png)
<p>After over 6,000 images and two attempts, arc achieved 90% accuracy in mood classification!</p>{:.caption}

Following thorough reflection, immersing myself in film theory, and redefining the essential elements of mood, I felt prepared to make another attempt. Equipped with a clear vision for the model,  I meticulously constructed a set of rules for five distinct mood classifiers and curated an extensive dataset of nearly 3,000 images. The dataset was then fed through a computer vision pipeline for training. It took about two weeks to compile the entire dataset by hand, and only ~12 minutes to run the training program.

###### Forming your own opinion
My exploration of future technologies expanded my understanding, emphasizing the need for collaborative and reflective spaces to engage with seemingly complex systems. This project sparked new questions and ideas about AI's future, emphasizing the significance of addressing biases and perspectives in the development of technologies and systems. 

To foster dialogue on future technology and the collaborative relationship between humans and technology, I created a reflective space, encouraging users to consider their role in the system.

![arc-says-hi](/assets/images/projects/arc/arc-says-hi.png)
![reflect](/assets/images/projects/arc/reflect.png)

Ultimately, I believe that collaboration between people and AI is an exercise in self-awareness and reflection. Our experiences and perspectives serve as the foundation upon which the AI learns, underscoring the importance of considering how we will inform the future of technology.

<!-- This project served as a thesis, focusing on AI collaboration, complex systems, and speculative technologies. -->

![credits](/assets//images/projects/arc/credits.png)
<p>and the credits roll...</p>{:.caption}
###### What's next
This project has ignited my passion for generative AI and filmmaking, informing my ongoing exploration. Future updates to arc, such as dynamic shapes, sharable films, and customizable inputs, are just the beginning. I am excited to continue pushing the boundaries, working on more intricate AI + film tools.
 
This technology will reshape the way we create films. [If you're interested in helping, reach out](ma&#105;lt&#111;&#58;j&#37;40j%65&#108;&#37;69a&#115;&#46;%6&#68;&#37;6&#53;?subject=Interested in Film and AI&body=[Please share your portfolio and a bit about yourself]). Exciting stuff is happening.

{{end}}
