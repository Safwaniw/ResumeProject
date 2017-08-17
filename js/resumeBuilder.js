var bio ={
	"name" : "Waleed AlSafwani",
	"role" : "Front-End Web Developer",
	"contacts": {
		"mobile": "0123456789",
		"email": "waleed.safwani@yahoo.com" ,
		"github": "Safwaniw",
		"twitter": "waleed",
		"location": "Dammam"
	},
	"welcomeMessage": "Good Day everyone",
	"skills": ["HTML","Javascript","JQuiry","Bootstrap"],
	"biopic": "images/fry.jpg",
	display: function (){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formatedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formatedEmail= HTMLemail.replace("%data%", bio.contacts.email);
		var formatedGit= HTMLgithub.replace("%data%",bio.contacts.github);
		var formatedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
		var formatedTwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
		
		$("#topContacts , #footerContacts").append(formatedMobile+
			formatedEmail+
			formatedGit+
			formatedLocation+
			formatedTwitter);
		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);

		for(var skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
};

var education = {
	"schools": [{
		"name": "Udacity",
		"location": "Khobar",
		"degree": "Nano Degree",
		"majors": ["Web Development","Android Development"],
		"dates": "July-2017",
		"url": "http://Udacity.com"
	},
	{
		"name": "SEU",
		"location": "Riyadh",
		"degree": "BSC",
		"majors": ["Information Technology"],
		"dates": "2012 - 2017",
		"url": "seu.edu.sa"
	}],
	"onlineCourses": [{
		"title": "Front-End Web development",
		"school": "Udacity",
		"dates": "July-2017",
		"url": "http://Udacity.com"
	},
	{
		"title": "Android Development",
		"school": "Udacity",
		"dates": "July-2017",
		"url": "http://Udacity.com"
	}],
	display: function(){
		
		for (var school in education.schools){
			$("#education").append(HTMLschoolStart); 
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name) + 
				HTMLschoolDegree.replace("%data%",education.schools[school].degree));
			$(".education-entry:last").append();
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors));
		}

		$(".education-entry:last").append(HTMLonlineClasses);
		for (var course in education.onlineCourses){
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title) +
				HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[course].url));
		}
	}
};

var work={
	jobs:[{
		"employer": "Udacity" ,
		"title": "Front-end Web Developer" ,
		"location": "Khobar", 
		"dates": "in progress",
		"description": "Front-End Web Developer" 
	},
	{
		"employer": "Wipro Arabia Ltd" ,
		"title": "Software and Web Developer" ,
		"location": "Khobar", 
		"dates": "2013 - Present",
		"description": ".NET Developer"
	}],
	display: function(){
		
		for (var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer)+
				(HTMLworkTitle.replace("%data%",work.jobs[job].title)));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		}
	}
};

var projects ={
	project: [{
		"title": "My first Git project", 
		"dates": "July-2017",
		"description": "My first Git project as a baby-step repository",
		"images": ["images/logo1.png","images/logo1.png"]
	},
	{
		"title": "My list item project", 
		"dates": "July-2017",
		"description": "Creating a List Item in HTML",
		"images": ["images/logo1.png","images/logo1.png"]
	}],
	display: function(){
		
		for (var proj in projects.project){
			$("#projects").append(HTMLprojectStart);
			var formatedTitle= HTMLprojectTitle.replace("%data%",projects.project[proj].title);
			var formatedDates= HTMLprojectDates.replace("%data%",projects.project[proj].dates);
			var formatedDescription= HTMLprojectDescription.replace("%data%",projects.project[proj].description);
			
			$(".project-entry:last").append(formatedTitle);
			$(".project-entry:last").append(formatedDates);
			$(".project-entry:last").append(formatedDescription);

			for(var img in projects.project[proj].images){
				var formatedImages= HTMLprojectImage.replace("%data%",projects.project[proj].images[img]);
				$(".project-entry:last").append(formatedImages);
			}
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);