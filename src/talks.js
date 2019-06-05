module.exports = [
  {
    key: "jeremy-daly",
    bio: `Jeremy is a passionate serverless advocate, an AWS Serverless Hero, and a senior technology leader with more than 20 years of experience building web and mobile applications. He is an active member of the serverless community, creating and contributing to open source serverless projects, and frequently consulting with companies looking to adopt serverless. Jeremy also writes extensively about serverless on his blog (jeremydaly.com) and publishes Off-by-none, a weekly newsletter that focuses on all things serverless (jeremydaly.com/newsletter). He is currently the CTO of AlertMe.`,
    photoUrl: "jeremy-daly.jpg",
    title: "Stop calling everything serverless!",
    speaker: "Jeremy Daly",
    abstract: `Since AWS launched Lambda in 2014, the term “serverless” has been used (and misused) to describe compute models, technologies, architectural patterns, operational constructs, and even rebranded cgi-bins. The term is now used so broadly that it’s turning into a buzzword with no discernible meaning.

    In this talk, we’ll cut through all the marketing hype, and discuss why the underlying concept of “serverless”, and the superpowers that come with it, are much more important than the name itself. We’ll cover:
    - A brief history of development and how/why we got to serverless
    - Why serverless requires developers to think differently about how applications are built
    - Serverless use cases that add real business value
    - Problems with serverless and what the industry needs to do better
`,
    workshop: false
  },
  {
    key: "guillermo-rauch",
    bio: `
    Guillermo is the founder of ZEIT, <strong>co-creator of <a target=“_blank” href="https://now.sh">Now</a> and Next.js</strong>, and former CTO and co-founder of LearnBoost and Cloudup, acquired by <a target=“_blank” href="https://wordpress.com">wordpress.com</a> in 2013.<br /> He's a former mentor of an Open Source Engineering class organized and pioneered by Stanford, with students from Harvard, MIT, Carnegie Mellon, UPenn, Columbia and others.<br /><br />

He's the creator of <a target=“_blank” href="https://socket.io">socket.io</a>, one of the most popular JavaScript projects on GitHub, and of the first MongoDB ORM for Node.js: MongooseJS. Before that he was a core developer of the MooTools JavaScript framework. He's the author of "Smashing Node.js" published by Wiley in 2012, best-selling book about Node.js on Amazon in multiple programming categories.
`,
    photoUrl: "guillermo-rauch.jpg",
    title: "From Servers to Serverless",
    speaker: "Guillermo Rauch",
    abstract: `ZEIT Now enables deploying any serverless application instantly. With just one command ('now' or 'git push') you get a URL back with your working deployment, which takes advantage of a global CDN network that automatically serves your static assets (such as a static frontend) and invokes lambdas on-demand. Deploying is faster. The resulting websites and applications load faster. Failures are minimized or flat-out disappear. No monitoring is required. It all sounds like heaven... except serverless is different. This talk will explore how we are helping developers get all these benefits and migrate from a serverful world without a hassle.
`,
    workshop: false
  },
  {
    key: "andreas-grimm",
    bio: `Andreas is an expert in Identity & Access Management and a proponent of serviceful, serverless architectures.
    Being aware of the fact that having a shared understanding with the business is even more important than technical solutions, he's into aproaches like Domain Driven Design and EventStorming.
    He's from the community for the community and organizes several meetup groups in Berlin like <a href="https://twitter.com/DDDBER">@DDDBER</a> and <a href="https://twitter.com/fullstack_JS">@fullstack_JS</a>.`,
    photoUrl: "andreas-grimm.jpg",
    title: "Practical Auth in a serverless World",
    speaker: "Andreas Grimm",
    abstract: `It became essential for businesses to protect their applications, services and customer data from attackers.
    If you want to stay competitive, knowing how to efficiently and easily apply security and auth while being aware of the most common pitfalls is key in today's serverless and serviceful world.`,
    workshop: false
  },
  {
    key: "danilo-poccia",
    bio: `Danilo works with startups and companies of any size to support their innovation. In his role as Evangelist at Amazon Web Services, he leverages his experience to help people bring their ideas to life, focusing on serverless architectures and event-driven programming, and on the technical and business impact of machine learning and edge computing. He is the author of AWS Lambda in Action from Manning.`,
    photoUrl: "danilo-poccia.jpg",
    title: "Diving deep into the event-driven side of serverless",
    speaker: "Danilo Poccia",
    abstract: `Serverless computing is often described as the interaction of functions with fully-managed services. In this way, you can build applications without having to think about servers. But how do functions and fully-managed services interact? Via events! Events are important for serverless. Event-driven architectures help you to adopt some of the best practices for distributed systems without even realizing it. Let’s see what events and event-driven programming can bring to the table, what we can learn to build better and easier to manage serverless applications.`,
    workshop: false
  },
  {
    key: "jessica-tibaldi",
    bio: `Jessica works in Microsoft as Technical Solutions Professional. She joined Microsoft 4 years ago as Technical Evangelist supporting startups and software houses developing and migrating their solutions on Azure. During the past years, she worked as Software Engineer in EMEA area and she had been engaged mainly in projects related to serverless, bot framework and cognitive services solutions development.`,
    photoUrl: "jessica-tibaldi.jpg",
    title: "Serverless for solving big issues... getting your Pizzas ASAP!",
    speaker: "Jessica Tibaldi",
    abstract: `Wondering how to solve routing issues in a serverless way? This will be a practical demo on how to solve this problem with less infrastructure configuration as possible, using PaaS for messaging, maps and workflows capabilities provided by Azure Logic Apps and extended by Azure Functions.`,
    workshop: false
  },
  {
    key: "alessandro-gaggia",
    bio: `Currently Working as Head of Software Development for beSharp srl focused on front/back end development of cloud-based web apps based on Amazon AWS. Certified Solution Architect and DevOps professional on AWS services, PhD in Computer Engineering, I’ve also worked for Computer Vision Lab in University of Pavia on new approaches to, and algorithms for, Bioinformatics: proteins surface reconstruction and docking through Extended Gaussian Image (E.G.I.) representation. 
    Since June 2009, I have also been working with Anthony Baldry, Marco Porta and others on a new generation of web tools as part of the European 7th Framework Living Knowledge project. I specialize in the following areas: javascript, node.js, c, c++, c#, java, grails, opengl, xna, unity and ruby programming, graphics and web design.
    In my spare time I love watching series and going to cinema, cooking, gardening, coding videogames and drawing. I’m a Dogs & Cats lover. I recently started learning electric guitar.`,
    photoUrl: "alessandro-gaggia.jpg",
    title: "You have 1 new (serverless) notification!",
    speaker: "Alessandro Gaggia",
    abstract: `In this talk we will cover how to develop a serverless in-app notification system! Using API Gateway’s WebSocket APIs we’ll build a working serverless solution to make real-time notifications. With Lambda, DynamoDB, IAM, SQS, API Gateway we will setup a complete example featuring channel filtering.`,
    workshop: false
  },
  {
    key: "nitzan-shapira",
    bio: `A software engineer with over 12 years of experience in programming, machine learning, cyber-security, and reverse engineering. During the last year, I am working on Epsagon, being a co-founder and the CEO. Epsagon is focused on bringing observability to serverless cloud applications, using distributed tracing and AI technologies, tackling the unique challenges in such environments. Apart from co-founding Epsagon, I enjoy playing the piano, I am a traveling enthusiast, an experienced chess player, and addicted to sports.`,
    photoUrl: "nitzan-shapira.jpg",
    title: "Distributed Tracing in Serverless Systems",
    speaker: "Nitzan Shapira",
    abstract: `Observability of serverless, distributed systems is complex since each service is separated and from the others. Distributed tracing is key to understanding such systems. In serverless, there are unique challenges and opportunities which make distributed tracing powerful for gaining observability.`,
    workshop: false
  },
  {
    key: "marcia-villalba",
    bio: `Marcia Villalba is the host of <a href="http://bit.ly/foobar-youtube">FooBar</a>, a Youtube channel where she publishes at least one new video every week. In her channel, she focuses on teaching how to use AWS serverless technologies and other cloud related topics. Marcia is a AWS Serverless Hero and a Serverless Champion, and also hosts the <a href="https://www.meetup.com/awsfin/">Finland AWS User Group</a>. She is also the author of a Manning course <a href="http://bit.ly/serverless-apps-aws">“Serverless Applications with AWS”</a> and other serverless courses.`,
    photoUrl: "marcia-villalba.jpg",
    title: "Developing Serverless applications with GraphQL",
    speaker: "Marcia Villalba 🦄",
    abstract: `Do you want to build apps with almost no code? Do you want to have very well documented APIs without writing the docs?
    Do you want not to worry about servers and managing infra? If your answer is YES to all the questions maybe you should consider Serverless GraphQL and come to my talk.`,
    workshop: false
  },
  {
    key: "soenke-ruempler",
    bio: `Soenke Ruempler is co-founder of superluminar.io, a consultancy located in Hamburg, where he helps organizations to embrace technical and cultural change on their way to the Public Cloud. He is always curious about the bigger picture, and he blogs at ruempler.eu and superluminar.io or tweets at twitter.com/s0enke.`,
    photoUrl: "soenke-ruempler.jpg",
    title: "Serverless vs. Organizations: How Serverless forces us to *un*learn",
    speaker: "Soenke Ruempler",
    abstract: `For many orgs serverless is going to become a major challenge. Entire teams might get obsolete or will change substantially. How can we prepare our org and people for unlearning old patterns that don’t work anymore in a serverless world? Let’s have a look at organizational *un*learning.`,
    workshop: false
  },
  {
    key: "farmin-farzin",
    bio: `I'm a Full-Stack developer working @ Digital Attitude in Milan.
    I work every day to build great products while I learn new stuff. I've been Network Administrator, Researcher, Consultant, and DevOps Engineer.`,
    photoUrl: "farmin-farzin.jpg",
    title: "Code your infrastructure with your favorite language!",
    speaker: "Farmin Farzin",
    abstract: `IaaC is one of the subjects that normally is underrated and developers don't want to spend time on, considering that paradoxically can help them a lot to save the time to configure (re-configure) the services on different env. 
    So, it'd be great if developers code their infra as like as their apps.`,
    workshop: false
  },
  {
    key: "ory-segal",
    bio: `A world-renowned expert in application security, with 20 years of experience in the field. Ory is the CTO and co-founder of <a target="_blank" href="https://www.puresec.io/">PureSec</a>, a start-up that enables organizations to build and maintain secure and reliable serverless applications. Prior to PureSec, Ory was Sr. Director of Threat Research at Akamai, were he led a team of top web security & big data researchers. Prior to Akamai, Ory worked at IBM as the Security Products Architect and Product Manager for the market leading application security solution IBM Security AppScan. Ory authored 20 patents in the field of application security, static analysis, dynamic analysis, threat reputation systems, etc. Ory is serving as an officer of the Web Application Security Consortium (WASC), he is a member of the W3C WebAppSec working group, and was an OWASP Israel board member.`,
    photoUrl: "ory-segal.jpg",
    title: "Serverless Security: Attackers & Defenders",
    speaker: "Ory Segal",
    abstract: `In serverless, the cloud provider is responsible for securing the underlying infrastructure, from the data centers all the way up to the container and runtime environment. This relieves much of the security burden from the application owner, however it also poses many unique challenges when it comes to securing the application layer. ​In this presentation, we will discuss the most critical challenges related to securing serverless applications - from development to deployment. We will also walk through a live demo of a realistic serverless application that contains several common vulnerabilities, and see how they can be exploited by attackers, and how to secure them. I will also use examples from the real world, including a story on how we hacked a real world serverless application for bounty, and won.`,
    workshop: false
  },
  {
    key: "victoria-bernard",
    bio: `Full stack, product-minded engineer focused on Cloudflare Workers and Apps. An engineer who started a career working at large firms in hardware sales and moved throughout Cloudflare from support to product and to developement. Passionate about building products that make developer lives easier and more productive.`,
    photoUrl: "victoria-bernard.jpg",
    title: "Dev life hacks using serverless",
    speaker: "Victoria Bernard",
    abstract: `Serverless doesn’t just let us hack our web apps. We can also hack our everyday tools. As developers, we are sometimes most creative in finding those nits of inefficiencies on our own dev environments. Let’s walk through some of my favorite hacks for getting serverless to ease your developer life.`,
    workshop: false
  },
  {
    key: "gunnar-grosch",
    bio: `Gunnar is Cloud Evangelist at Opsio based in Sweden. He has almost 20 years of experience in the IT industry, having worked as a front and backend developer, operations engineer within cloud infrastructure, technical trainer as well as several different management roles. Gunnar’s favorite subjects are serverless and chaos engineering.`,
    photoUrl: "gunnar-grosch.jpg",
    title: "Performing chaos in a serverless world",
    speaker: "Gunnar Grosch",
    abstract: `The principles of chaos engineering have been battle-tested for years using traditional infrastructure and containerized microservices, but how do they work with serverless functions and managed services? Join as we move from talking about principles to performing real chaos in a serverless world!`,
    workshop: false
  },
  {
    key: "sheen-brisals",
    bio: `Sheen Brisals is a seasoned software engineer, AWS Certified Solutions Architect and a team coach, currently architecting and guiding a team of engineers building serverless eCommerce solutions at LEGO. He has previously worked in engineering and leadership positions with leading software organizations. He is passionate about serverless and managed services, a keen follower of AWS cloud solutions and the architectural patterns. Away from technology, Sheen likes walking and developing his culinary skills.`,
    photoUrl: "sheen-brisals.jpg",
    title: "Serverless Journey of shop.LEGO.com",
    speaker: "Sheen Brisals",
    abstract: `Connecting LEGO play experience with millions requires an innovative platform. This fueled the cloud migration of the legacy eCommerce application. This talk will walk you through the principles, the approach, the learnings and of course the serverless technologies that made the vision a reality.`,
    workshop: false
  },
  {
    key: 'bret-mcgowen',
    bio: `Bret is a Developer Advocate for Serverless on the Google Cloud Platform team at Google, focusing on serverless products like Google Cloud Functions, App Engine, Firebase, machine learning APIs, and more. He's currently an aspiring Node.js developer. Prior to Google, Bret worked as a software engineer in the cloud industry at Rackspace. He's often on the running trail, volleyball court or kickball field. Bret earned a bachelor’s degree in computer science from Texas A&M University.`,
    photoUrl: 'bret-mcgowen.jpg',
    title: 'Serverless your containers with Knative plus Cloud Run',
    speaker: 'Bret McGowen',
    abstract: `Even if you don't see them, containers are what's running your code in most serverless platforms. By using containers directly, you can write serverless apps in almost any language and bundle any runtimes or binaries. Learn how Knative, the open source project from Google, Pivotal, Red Hat and more, provides an industry standard way to build serverless platforms and run your serverless apps on top of Kubernetes. Knative lets you tune scaling parameters, run on hardware with GPUs or multi-core processors, and more.`,
    workshop: false,
  }
];
