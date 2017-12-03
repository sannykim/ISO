import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class SocialPage {
  data: any
  constructor(public navCtrl: NavController, public http: Http) {
    this.data = { 
      "city": { 
      "id": 1037801, 
      "city": "Singapore", 
      "lat": 1.3, 
      "lon": 103.85, 
      "state": "", 
      "country": "sg", 
      "zip": "meetup1", 
      "member_count": 26281 
      }, 
      "events": [ 
      { 
      "link": "https://www.meetup.com/Social-Vibes/events/245457469/", 
      "visibility": "public_limited", 
      "group": { 
      "created": 1413466409000, 
      "name": "Social Vibes", 
      "id": 17662252, 
      "join_mode": "approval", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Social-Vibes", 
      "who": "Lovely People", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 3, 
      "duration": 10800000, 
      "time": 1514601000000, 
      "utc_offset": 28800000, 
      "name": "Lunch with the elderly - Volunteers Required", 
      "id": "hjnnklywqbnc" 
      }, 
      { 
      "created": 1482234782000, 
      "duration": 10800000, 
      "id": "lszlbpywqbpc", 
      "name": "Volunteer session -December food distribution 2017", 
      "rsvp_limit": 16, 
      "status": "upcoming", 
      "time": 1513478700000, 
      "local_date": "2017-12-17", 
      "local_time": "10:45", 
      "rsvp_close_offset": "PT-167H-15M", 
      "updated": 1511860681000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 16, 
      "venue": { 
      "id": 23963259, 
      "name": "Blk 93 Henderson Road", 
      "lat": 1.286929965019226, 
      "lon": 103.82038879394531, 
      "repinned": false, 
      "address_1": "Blk 93 Henderson Road", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1435358119000, 
      "name": "Starz world", 
      "id": 18701397, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Starz-world-Meetup", 
      "who": "Stars", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Starz-world-Meetup/events/237969679/", 
      "description": "<p>17 dec 2017, Sunday. Do you have any plans yet?<br/>If No, Lets meetup and help elderly !!</p> <p>This event we are not the organiser. We just gather people to help out. Lotus Light Charity Society:<br/>Event: Distribution of rice to 1 room flat elderly.<br/>Date: 17 dec 2017<br/>Meeting Place: Henderson Road Blk 93<br/>Meeting Time: 10.45am<br/>Place for distribution:Henderson Road<br/>Dress Code: Casual</p> <p>Person-In-Charge: William[masked]<br/>Helping Hearts-In-Charge(s) : President Vincent[masked]</p> <p>SW Meetup members in Charge : Susan /Yan</p> <p>Duties :</p> <p>Basically when you arrived, you will need to help to carry the food items to the void deck from the delivery lorry. After arranging, you have to pack the food rations for those elderly who are unable to collect themselves , so we have to deliver it to their house. The rest of the elderly will queue up to get their food items. That's about it.</p> <p>• This is small distribution, limited volunteers to help out. Too many people come along will be too messy &amp; nothing to do.</p> <p>• Yan and i will be there to help with anything, but main duties task we will let you guys to do it. • If any of your family members/friends interested to follow/come along watch and experience,dun mind doing nothing. We are welcome too. Make new friends and help elderly.</p> <p>Close event when reach 16 members. Only rvsp which you confirm can attend. Give space to others .</p> <p>Welcome to join our waitlist,if somebody opt out last min.</p> <p>Thanks</p> <p>Susan - Organizer<br/>Yan - Co- Organizer</p> ", 
      "visibility": "public" 
      }, 
      { 
      "link": "https://www.meetup.com/Leisure-Small-Social-Group/events/236816846/", 
      "visibility": "public_limited", 
      "group": { 
      "created": 1430556389000, 
      "name": "Leisure Small Social Group", 
      "id": 18572889, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Leisure-Small-Social-Group", 
      "who": "Freedom自由人", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "waitlist_count": 8, 
      "yes_rsvp_count": 10, 
      "duration": 5400000, 
      "time": 1513479600000, 
      "utc_offset": 28800000, 
      "name": "Volunteer Session #30 - December Food Distribution 2017", 
      "id": "kjmvwlywqbpc" 
      }, 
      { 
      "created": 1505197963000, 
      "duration": 7200000, 
      "id": "jtgvsnywqbjb", 
      "name": "Those who seek divine knowledge, clear emotional bagages or seek from within", 
      "rsvp_limit": 20, 
      "status": "upcoming", 
      "time": 1512558000000, 
      "local_date": "2017-12-06", 
      "local_time": "19:00", 
      "updated": 1506559369000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 1, 
      "venue": { 
      "id": 25507067, 
      "name": "9 Lorong 29 Geylang #03-02 (5 mins walk from Aljunid mrt)", 
      "lat": 0, 
      "lon": 0, 
      "repinned": false, 
      "address_1": "#03-02", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1505194890000, 
      "name": "Searching for soul purpose, higher purpose in life", 
      "id": 25889225, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Searching-for-soul-purpose-higher-purpose-in-life", 
      "who": "divine knowledge / information", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Searching-for-soul-purpose-higher-purpose-in-life/events/245526275/", 
      "description": "<p>A class on spirit soul information, the purpose of the soul in every living entity and different types of yoga and karma.</p> <p>Sharing a one minute method to achieve a peace of mind through mind control and connect from within.</p> <p>Free pure vegetarian meal provided at 9pm.</p> <p>QnA for clarity.</p> <p>A small token of donation to support The Food For Life Project for the poor, needy and elderly home. No donation is also all right.</p> <p>Come to feed the soul with transcendental / spiritual knowledge to have a peace of mind, happiness and abundance!</p> ", 
      "how_to_find_us": "5 minutes walk from Aljunid MRT", 
      "visibility": "public" 
      }, 
      { 
      "created": 1506399002000, 
      "duration": 162000000, 
      "id": "243670331", 
      "name": "Sky Mirror 天空之镜+ Angsa Tour with Klang Attraction & 1 Night KL 4 Star Hotel Stay", 
      "rsvp_limit": 40, 
      "status": "upcoming", 
      "time": 1512745200000, 
      "local_date": "2017-12-08", 
      "local_time": "23:00", 
      "updated": 1510044574000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 18, 
      "venue": { 
      "id": 22138392, 
      "name": "Marsiling MRT Bus Stop", 
      "lat": 1.2896440029144287, 
      "lon": 103.84148406982422, 
      "repinned": false, 
      "address_1": "Marsiling", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1469372722000, 
      "name": "Let's Go Travelling & Hiking", 
      "id": 20218860, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Lets-Go-Travelling-Hiking", 
      "who": "Members", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Lets-Go-Travelling-Hiking/events/243670331/", 
      "description": "<p>Due to overwhelming response from 18-20 Aug2017, 22-24 Sep 2017, an additional trip to Sky Mirror 天空之镜+Pulau Angsa (天鹅岛) has been arranged on 8-10Dec17!</p> <p>We will be staying in a 3-4star hotel in Bukit Bintang and exploring Klang &amp; KL City to have awesome time for shopping, massaging and feasting great food!</p> <p>Don't wait, RSVP and join us!!</p> <p>----------------------------------------------------------</p> <p>Part 2: Sky Mirror 天空之镜+ Pulau Angsa 天鹅岛-9 Dec 17(Sat, 1-530pm)</p> <p>Please view the You-tube is so amazingly beautiful!</p> <p><a href=\"https://youtu.be/6RXG5ec1NCY\" class=\"embedded\">https://youtu.be/6RXG5ec1NCY</a></p> <p>Sasaran Beach is better known as “Mirror in the Sky “as the shallow waters of this “Secret Island” reflects the sky in all its going, thus creating many unique photography and selfie opportunities for all.</p> <p>It is advisable to wear striking colored clothes or bring striking colored props to make your photos pop-out. With the blue sky and white clouds above you, the reflection on the thin sheet of water would be symmetrical. The tour takes half a day to linger around the sand bar and expected non-stop jumping, posing and taking photos in front of the awesome blue sky and beautiful people.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/7/d/1/5/600_464852021.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/7/d/1/e/600_464852030.jpeg\" /></p> <p>Sasaran Beach is located 1.74 nautical miles off the coast of the fishing village of Jeram, Selangor, in the middle of the Straits of Malacca Sea. It is when the tide is ideal that this sand bar emerges also dubbed the Salar de Uyuni of Malaysia, after similar natural wonder in Bolivia.</p> <p>Sky Mirror is also home to a multitude marine life besides sand dollars, the most common are the sea clams and baby clams which scattered abundantly in the sand. Though tiny, you will definitely fall in love with millions of baby clams that glitter like diamonds under the sun. Other interesting marine organisms found are sea anemones, shore crabs, red crabs, soldier crabs, bamboo clams. sea grapes, bailer shell, sea snails, and a variety of shells.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/7/d/7/7/600_464852119.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/7/d/6/5/600_464852101.jpeg\" /></p> <p>On the way back from Sasaran Beach, we are able to see some of the islands there and the story behind them like Pulau Angsa (天鹅岛), which is an abandoned resort project. There will be teatime served with refreshment,oyster knocking and a leisure walk to the lighthouse for a panoramic view of the whole island. Everyone will serve with fresh sea oysters which taste so fresh, juicy, sweet, chewy and with no lemon juice added.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/7/c/f/7/600_464851991.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/7/d/a/1/600_464852161.jpeg\" /></p> <p>Part 1: Visit Klang Morning Market ,Mural Wall &amp; Railway Station (Sat, 6-11am)</p> <p>Klang (巴生) is the royal town of Selangor, on the west coast of peninsular Malaysia before Shah Alam. The town is named after the Klang River, which cuts the town in half, and sits at the western end of the Klang Valley.</p> <p>We will be having early morning breakfast, strolling the morning market, visit the mural wall and the klang heritage railway station.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/8/0/3/3/600_464852819.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/8/0/1/a/600_464852794.jpeg\" /></p> <p>Part 3: Stay at Royale Chulan Bukit Bintang| Malaysia | 4* star hotel</p> <p>Centrally located in the Golden Triangle, Royale Chulan Bukit Bintang Hotel is a short walk to shopping areas at Berjaya Times Square and Lot 10.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/6/c/7/600_465609927.jpeg\" /></p> <p>This area is the shopping and entertainment district of Kuala Lumpur catering all needs from fashion, food to technology. Go to Jalan Alor in Bukit Bintang is the largest food street in Kuala Lumpur. Most of the hawker stalls open from evening.For shopping, can visit Pavilion, Sungei Wang Plaza, Times Square and many many more! For men who are more into gadgets, Plaza Low Yat is the place to go. Of course, is a good place for pub and chill-out at night together with friends after a dinner!</p> <p>Petaling Street is a famous shopping area in the China Town of Kuala Lumpur. This is the place to come for some ethnic food, bargain shopping, groceries, cheap clothing, and souvenirs. It may be a one street long, but don’t forget to explore the entire surrounding alleys and lanes as they are alive with stores and pop up stalls.</p> <p>Petronas Twin Towers<br/>It’s easy to access, everybody knows where the twin towers are, and of course it’s the top spot to have your selfie as a proof you’ve visited KL</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/8/6/1/7/600_464854327.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/8/6/5/e/600_464854398.jpeg\" /></p> <p><b>-------------------------------------------------</b></p> <p><b>Event Details:-</b></p> <p><b>Date of event: 8-10 Dec 2017(Fri-Sun)</b></p> <p><b>Group size: 40pax</b></p> <p><b>Tour &amp; Fun Package of $195 includes:</b></p> <p><b> • Sky Mirror 天空之镜+Pulau Angsa (天鹅岛)</b></p> <p><b> • 3-4-Star Hotel Stay in KL based on twin sharing </b></p> <p><b>• Klang (巴生) Sightseeing+ Visit Places of Interest</b></p> <p><b>• Meals of 1 L/D(Sat) &amp; 1 B/D (Sun)</b></p> <p><b>********************************************</b></p> <p><b>1) RSVP and TT $195 to POSB Current Account[masked]</b></p> <p><b>2) Text[masked] me once done with Print-screen Receipt</b></p> <p><b>TA License No : 02920</b></p> <p><b>TA NAME:WILFRED GO TRAVELLING &amp; HIKING </b></p> <p><b>********************************************</b></p> <p><b>Suggested Itinerary:</b></p> <p><b>8 Dec 2017 (Fri)</b></p> <p>11pm- Gather at BUS STOP infront of Marsiling MRT Station</p> <p>1110pm – Coach sets off to Woodland Customs</p> <p>9 Dec 2017(Sat)</p> <p>5am –Wash-up</p> <p>6am –Breakfast at Klang Coffee Shop(Own Cost)</p> <p>8am-Visit Klang Mural Wall </p> <p>930am- Visit Klang Railway Station</p> <p>11am- Lunch(Inclusive)</p> <p>1230pm- Arrive at Jetty</p> <p>1pm- Depart to Sky Mirror</p> <p>3pm- Depart to Pualu Angsa</p> <p>5pm- Arrive Jetty</p> <p>530pm- Dinner( Inclusive)</p> <p>730pm- Checking Hotel </p> <p>8pm- Free &amp; Easy</p> <p>11pm- Sleep</p> <p><b>10 Dec 2017(Sun) </b></p> <p>8am- Hotel Breakfast(Inclusive)</p> <p>9am-Free &amp; Easy </p> <p>1230pm-Checkout Hotel (Consume Own Lunch)</p> <p>1pm- Depart to Johor Bahru</p> <p>530pm- Dinner(Inclusive)</p> <p>6pm-Depart to JB Custom</p> <p>7pm-Marsiling MRT</p> <p>***************************</p> <p>Disclaimer, Indemnity and Terms of Participation:</p> <p> 1. If the participant is late or does not show up at the meeting point specified on date and time, the organizer will not wait for the participant.</p> <p>2. It is the participant's onus to find out and fulfill, in a timely manner, the immigration requirements of the trip destination with regard to his / her own nationality - i.e. visas, permits etc. In the absence of essential documentation, the organizers shall not be liable for the consequences of incomplete trip formalities.</p> <p>3. The participant acknowledges that this is an adventure trip. The itinerary serves as a guide only and flexibility or changes may be required. Members who do not cooperate or adhere to the instructions and advice set out by the Event Host shall be removed from the event. The organizers cannot be held responsible for any changes, cancellations or delays caused by accidents, strikes, government regulations, weather conditions or natural calamities, etc.</p> <p>4. All participants are strongly advised to have comprehensive travel insurance against medical exigencies, personal accidents, natural calamities, etc. with the appropriate coverage of activities and geographical area.</p> <p>5. The participant understands that during the course of the trip certain events may occur, including, but not limited to, accident or illness, political instability and the forces of nature. The participant agrees to assume all risks associated with the trip and indemnifies the organizers and hosts against all claims, disputes arising from his / her participation.</p> <p>**I confirm that I have read, agree &amp; accept the above terms and conditions before participating in this event.**</p> ", 
      "visibility": "public" 
      }, 
      { 
      "created": 1505482096000, 
      "duration": 171000000, 
      "id": "243389505", 
      "name": "An Exhilarating Kampar Water Abseiling,Rafting & Caving+ 1 Night Ipoh Stay", 
      "rsvp_limit": 42, 
      "status": "upcoming", 
      "time": 1513350000000, 
      "local_date": "2017-12-15", 
      "local_time": "23:00", 
      "updated": 1505970285000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 21, 
      "venue": { 
      "id": 22138392, 
      "name": "Marsiling MRT Bus Stop", 
      "lat": 1.2896440029144287, 
      "lon": 103.84148406982422, 
      "repinned": false, 
      "address_1": "Marsiling", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1469372722000, 
      "name": "Let's Go Travelling & Hiking", 
      "id": 20218860, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Lets-Go-Travelling-Hiking", 
      "who": "Members", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Lets-Go-Travelling-Hiking/events/243389505/", 
      "description": "<p>By Popular Demand!</p> <p>We had so much fun on 1-3 Sep 2017! A combo of Limestone Caving, Water Rafting to Water Abseiling or Water Tubing and a fun day in Ipoh to shop, eat and massage! </p> <p>An exhilarating adventures and tropical escape and suitable for inexperienced!</p> <p>Let's get crazy on a Saturday with wet activities from 3 hours Gua Tempurung Caving inside a 2.4 km limestone tunnel followed by White Water Rafting, Waterfall Abseiling or Water Tubing) to food paradise in Ipoh Town, just to relax to eat, shop, massage and visit places of interests!</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/5/b/7/6/600_464543414.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/5/b/7/e/600_464543422.jpeg\" /></p> <p>The Syuen hotel -4 star hotel</p> <p>The Syuen hotel is rated as 4 star hotel. The location is really ideal and next to Ipoh Parade Shopping Mall which is every shopper's paradise located in the heart of Ipoh. The nice hawker foods are just nearby.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/5/b/2/2/600_464543330.jpeg\" /></p> <p><b>District of Kampar, Perak, Malaysia</b></p> <p>Gopeng is small town located in the District of Kampar, Perak, Malaysia. It is situated about 20km south of Ipoh. The town was once was bustling with tin miners and locals who busied themselves with the great tin mining industry of Malaysia until the collapse of the tin empire in 1980s. The town being in close proximity to Kampar river (water rafting, abseiling etc) and limestone outcrops like Gua Tempurung (caving) is becoming a major attraction to outdoor enthusiasts.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/3/4/0/1/600_462553313.jpeg\" /></p> <p><b>Kampar Water Activities Attractions:</b></p> <p><b>-Explore the largest limestone cave-Gua Tempurang Caving</b></p> <p><b>Gua Tempurung</b>, or Tempurung Cave, is Peninsular Malaysia’s largest limestone cave, and is a favorite among spelunkers and caving enthusiasts. The cave system comprises five large domes that resemble coconut shells. One of the available tours allows you to splash through the underground river and crawl through narrow passages. The activity will last 2 hour 30 minutes. It is about 2.4km from the entrance to go down 230 steps and get wet in the underground river. You will have lots of fun crawling through holes and sliding down slippery stones before getting out to be greeted by the beautiful sight of the greenery outside.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/3/3/2/3/600_462553091.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/3/4/2/5/600_462553349.jpeg\" /></p> <p><b>-</b><b> Go abseiling down a waterfall </b></p> <p>Here’s another one for the adrenaline junkies: if you’re not afraid of heights (or wish to conquer it), then abseil from the top of <b>Ulu Geruntum waterfall</b>. The waterfall is about two storeys high, so it’s perfect for beginners. It’s a refreshing experience to abseil down a crashing wall of water, and you can even do it more than once if you like! A safety briefing will be conducted on how to do abseiling from wearing the safety harness to helmet to how to abseil.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/3/3/d/0/600_462553264.jpeg\" /></p> <p>\n\n\n<a href=\"https://youtu.be/fWHXk3Pug5k\" class=\"embedded\">https://youtu.be/fWHXk3Pug5k</a></p> <p><b>- Try River Tubing (For those opt out Waterfall Abseiling)</b></p> <p>Have some splash moment at the river with tubing activities. This water based activity is fun and relaxing in one of the scenic river in Malaysia; Kampar River.</p> <p><a href=\"https://youtu.be/AEU-3z_fpR0\" class=\"embedded\">https://youtu.be/AEU-3z_fpR0</a></p> <p><b>-Conquer the white water rapids of Kampar River- White Water Rafting</b></p> <p>The rafting takes about an hour and enjoys the thrills of tackling exciting rapids and floating down the clear water river amidst a lush rainforest. You will ride the continuous rapids graded from class I-III, and continue down river, passing by some old tin mining plains</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/5/b/9/2/600_464543442.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/5/b/9/c/600_464543452.jpeg\" /></p> <p><b>Attraction in Ipoh includes:</b></p> <p><b>1. Famous Sin Eng Heong Pastry Shop(long queue) </b></p> <p><b>2, Funny Mountain Soy Bean Curd</b></p> <p><b>3. Nan Cheong Coffee House</b></p> <p><b>4. Lo Wong Bean Sprout Chicken</b></p> <p><b>5. Kellie's Castle</b></p> <p>6. 3D Mural Walls</p> <p>7. The Concubine Lanes of Ipoh</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/5/b/6/6/600_464543398.jpeg\" /></p> <p><b>Event Details:- </b></p> <p><b>Date of event: 15-17 Dec(Fri-Sun)</b></p> <p><b>Group size: 42 pax (Max)</b></p> <p><b> Tour &amp; Fun Package of $250 includes:</b></p> <p><b> • 2 Way Transport to Gopeng &amp; Ipoh Town</b></p> <p><b> • Attractions As Mentioned In Itinerary</b></p> <p><b>• </b><b>1 Night Stay 4 Star Hotel based on Twin Room Sharing </b></p> <p><b> • 1 Breakfast, 1 lunch &amp; 2 Dinner Meals Inclusive </b></p> <p>********************************************</p> <p><b>TA License No : 02920/ TA NAME:WILFRED GO TRAVELLING &amp; HIKING </b></p> <p>1) RSVP and TT S$250 to POSB Current Account[masked]</p> <p><b>2) Text[masked] me once done with Print-screen Receipt</b></p> <p>********************************************</p> <p>Suggested Itinerary: (Subject to Change) </p> <p>15 Dec 17 (Friday Nite)</p> <p>11pm - Gather at Marsiling MRT Station Control</p> <p>1110pm - Set off to Woodland Customs</p> <p>16 Dec 17 (Sat)- (L/D)</p> <p>7am- Breakfast at Gopeng Town (Own Cost)</p> <p>830am- Gua Tempurung Cave Meeting Point</p> <p>9am- Commence Caving Activity</p> <p>12pm –Buffet Lunch (Inclusive)</p> <p>1pm- Commence White Water Rafting</p> <p>2pm - Rest</p> <p>230pm –Water Abseiling or Water Tubing</p> <p>4pm-Wash-up</p> <p>5pm – Depart to Ipoh Hotel</p> <p>6pm – Checking Hotel</p> <p>730pm –Dinner Inclusive</p> <p>830pm- Ipoh Town (Free &amp; Easy)</p> <p>1030pm- Back to Hotel</p> <p>17 Dec 17 (Sun)- (B/D)</p> <p>7am- Morning Call</p> <p>730am –Hotel Breakfast</p> <p>8am-Visit Concubine Lanes shopping &amp; taking Mural Pictures </p> <p>930am- Visit Ipoh Places Of Interests</p> <p>11am- Hotel Checkout</p> <p>(Note: For those not interest for Ipoh Activities, can rest in hotel &amp; have hotel breakfast till checkout)</p> <p>12pm- Depart to Kelly Castle</p> <p>1pm- Lunch ( Own Expenses)</p> <p>230pm-Depart back to Singapore</p> <p>6pm - Dinner (Inclusive)</p> <p>10pm - Arrive Marsiling MRT</p> <p>*********************************************************</p> <p><b>Disclaimer, Indemnity and Terms of Participation:</b></p> <p> 1. If the participant is late or does not show up at the meeting point specified on date and time, the organizer will not wait for the participant.</p> <p>2. It is the participant's onus to find out and fulfill, in a timely manner, the immigration requirements of the trip destination with regard to his / her own nationality - i.e. visas, permits etc. In the absence of essential documentation, the organizers shall not be liable for the consequences of incomplete trip formalities. </p> <p>3. The participant acknowledges that this is an adventure trip. The itinerary serves as a guide only and flexibility or changes may be required. Members who do not cooperate or adhere to the instructions and advice set out by the Event Host shall be removed from the event. The organizers cannot be held responsible for any changes, cancellations or delays caused by accidents, strikes, government regulations, weather conditions or natural calamities, etc. </p> <p>4. All participants are strongly advised to have comprehensive travel insurance against medical exigencies, personal accidents, natural calamities, etc. with the appropriate coverage of activities and geographical area.</p> <p>5. The participant understands that during the course of the trip certain events may occur, including, but not limited to, accident or illness, political instability and the forces of nature. The participant agrees to assume all risks associated with the trip and indemnifies the organizers and hosts against all claims, disputes arising from his / her participation. </p> <p><b>**I confirm that I have read, agree &amp; accept the above terms and conditions before participating in this event.**</b> </p> ", 
      "visibility": "public" 
      }, 
      { 
      "created": 1487045440000, 
      "duration": 3600000, 
      "id": "bkxvpmywqbjb", 
      "name": "Rooftop Sunset Yoga at myVillage Serangoon Gardens", 
      "status": "upcoming", 
      "time": 1512558000000, 
      "local_date": "2017-12-06", 
      "local_time": "19:00", 
      "updated": 1492394841000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 2, 
      "venue": { 
      "id": 25050079, 
      "name": "myVillage @ Serangoon Gardens", 
      "lat": 1.3651020526885986, 
      "lon": 103.86518096923828, 
      "repinned": false, 
      "address_1": "1 Maju Avenue, Singapore 556679", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1486995640000, 
      "name": "Outdoor Yoga in Singapore", 
      "id": 22365519, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Outdoor-Yoga-in-Singapore", 
      "who": "Members", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Outdoor-Yoga-in-Singapore/events/245526411/", 
      "description": "<p><img src=\"http://photos3.meetupstatic.com/photos/event/e/9/6/e/600_458339758.jpeg\" /></p> <p><img src=\"http://photos2.meetupstatic.com/photos/event/c/6/d/b/600_458570907.jpeg\" /></p> <p><img src=\"http://photos3.meetupstatic.com/photos/event/c/6/e/0/600_458570912.jpeg\" /></p> <p>Give yourself a mid-week boost this Wednesday evening! Recuperate and relax your mind and body after a stress-filled day with a beautiful sunset in the horizon.</p> <p>Classes are multi-levelled, beginners friendly. Seasoned practitioners are welcomed too. First time trial - $12 per person</p> <p>Class packages available:</p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/d/5/4/5/600_458454597.jpeg\" /></p> <p>Bring your own mat, towel, water and props (if needed)</p> <p>Visit website <a href=\"https://yogawithaileen.com/rooftop-yoga-singapore\" class=\"linkified\">https://yogawithaileen.com/rooftop-yoga-singapore</a> for more details.<br/>FB message or email [masked] for enquires and/or RSVP.</p> <p>*Note: Classes are weather-permitting as they are held at an unsheltered area. <b>Please RSVP to be informed if class is cancelled due to bad weather.</b></p> ", 
      "how_to_find_us": "Head up to myVillage, Level 3, Rooftop Garden! :)", 
      "visibility": "public" 
      }, 
      { 
      "created": 1504838765000, 
      "duration": 264600000, 
      "id": "243194259", 
      "name": "4D3N Yogyakarta ->Unesco Temples,Jomblang Cave,Merapi Sunrise,WaterRafting +More", 
      "status": "upcoming", 
      "time": 1513906200000, 
      "local_date": "2017-12-22", 
      "local_time": "09:30", 
      "updated": 1504840137000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 19, 
      "venue": { 
      "id": 16391662, 
      "name": "Singapore Changi Airport", 
      "lat": 1.3514399528503418, 
      "lon": 103.98509216308594, 
      "repinned": false, 
      "address_1": "Singapore Changi Airport", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1469372722000, 
      "name": "Let's Go Travelling & Hiking", 
      "id": 20218860, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Lets-Go-Travelling-Hiking", 
      "who": "Members", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Lets-Go-Travelling-Hiking/events/243194259/", 
      "description": "<p><b>Due to the popular demand, this is our 3rd time to Yogyakarta this year! Please refer to our amazing pictures taken on 2-5Mar17 and 26-29May17. The air ticket offers by Air-Asia as on 8 Sep2017 is only $288 departing on 22 Dec (Fri) and returning on 25Dec(Mon), grab your air-ticket fast from further disappointment!</b></p> <p><b>Come and join us as we are exploring one of the most popular tourist destinations in Indonesia, Yogyakarta ,besides the Uesco Temples like Borobudur &amp; Prambanan, Jomblang caves and Mount Merapi Sunrise, we will be doing white water rafting ,watching sunset together with ATV and horse ridings at Parangtritis Beach and shopping at JALAN MALIOBORO STREET!</b></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/5/f/f/5/600_458904565.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/0/6/4/600_458904676.jpeg\" /></p> <p><b>We will be staying 4D3N at JALAN MALIOBORO Street, nestled in the heart of Yogyakarta City Center, Hotel Hom, is an ideal spot from which to discover Yogyakarta and well located to enjoy the town's attractions and activities. </b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/5/9/f/b/600_458903035.jpeg\" /></b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/5/a/3/a/600_458903098.jpeg\" /></b></p> <p><b>A fun packed with full of laughter &amp; adrenaline pumping 4D3N activities.</b></p> <p><b>-----------------------------------------------------------</b></p> <p><b>Day 1- Airport- Explore Prambanan temple-Shopping at Malioboro street</b></p> <p><b>Day 2- Sunrise Merapi Tour – Borobudur Temple – Rafting Progo Hulu</b></p> <p><b>Day 3- Jomblang Cave Exploration – ATV &amp; Horse Ride at Parangtritis Beach </b></p> <p><b>Day 4- Airport Transfer (Early Hotel Checkout)</b></p> <p><b>---------------------------------------------------------</b></p> <p><b>*DAY 1 Attraction* </b></p> <p><b>Prambanan Temple - JALAN MALIOBORO STREET SHOPPING </b></p> <p><b>Be awed by the magnificent Prambanan Temple</b></p> <p><b>It is one of the Indonesia UNESCO World Heritage Site, being one of the largest Hindu temple architecture in Southeast Asia.</b></p> <p><b>This temple attracts many visitors from across the world. The complex originally has a total of 240 temples, but now only 11 remaining of various sizes. The largest is the Siva (Shiva) temple which towers dramatically at close to 50 meters high and is nice place to explore every corners of the temple that was built on 10th century. Partially restored, it seems more authentic and self-exploration allows your imagination to run while you do your own interpretation of the place, its structures and carvings.</b></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/4/9/a/600_464349370.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/4/e/1/600_464349441.jpeg\" /></p> <p><b>Stroll around Jalan Malioboro</b></p> <p><b>Visiting Yogyakarta without stroll around Malioboro is like going to Paris without checking out the Eiffel Tower. Stroll around Malioboro, shop there or go to Beringharjo market, open from 9 am until 5 pm. There are plenty of Batik (trousers, t-shirt, dresses, bangles and etc), sandals, blangkon (traditional central Javanese headdress worn by men and made of batik fabric) and much more to buy. A lot of tourists prefer to walk around Malioboro in the evening or at night. Malioboro is one of the best streets to sample cheap local food too, Bring more money to shop, eat &amp; buy!!</b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/a/2/8/5/600_456881605.jpeg\" /></b></p> <p><b>*DAY 2 Attractions*</b></p> <p><b>Sunrise Merapi Tour – Borobudur Temple – Rafting Progo Hulu</b></p> <p><b>Sunrise Merapi Tour </b></p> <p><b>Mount Merapi, the most active volcano in Indonesia sits in Central Java on the border of Yogyakarta. It last erupted in late 2010. The jeep will take you to certain spots around the base of Mount Merapi to watch sunrise in early morning. The Merapi Lava Tour is an off road adventure on the slopes of Merapi Volcano with a serious backstory. The tour is held around the region most affected by the last volcanic explosion. During the tour you are driven around on a 4×4 jeep through a beautiful landscape. You will also visit some of the villages that were abandoned following the last eruption. This is definitely one of the interesting things to do in Yogyakarta when you are visiting the city.</b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/5/9/a/5/600_458902949.jpeg\" /></b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/6/1/6/4/600_458904932.jpeg\" /></b></p> <p><b>Venture out to the serene Borobudur Temple</b></p> <p><b>This 9th-century temple is an Indonesia UNESCO Heritage site and one of the largest Buddhist temple in the world, consisting of six square platforms with 2,672 relief panels and 504 Buddha status. Thousands of Buddhists does their pilgrimage here in Borobudur during Waisak day.</b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/5/c/9/2/600_458903698.jpeg\" /></b></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/4/c/9/600_464349417.jpeg\" /></p> <p><b>White Water Rafting Adventure </b></p> <p><b>RIVER progo upstream, located in the district. Temanggung, about 2.5 hours from Yogyakarta / Semarang, this river is upstream from the river Progo, and has rapids class III +. Beautiful scenery and the water is clear and cold decorate along the river path, plus its unspoiled local conditions will add to the exotic adventures there.</b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/6/1/1/0/600_458904848.jpeg\" /></b></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/5/2/9/600_464349513.jpeg\" /></p> <p><b>*DAY 3 Attraction* </b></p> <p><b>Jomblang Cave-Adventuous Ride into Hidden Jungle</b></p> <p><b>The Goa Jomblang day tour is an Indiana Jones style adventure .You’ll be lowered 60 meters into a sinkhole. Explore a hidden forest. Trek for more than 50 meters through a dark tunnel using only a flashlight. At the end of the tunnel you’ll enter a cave the size of a cathedral. A beam of light coming from a hole in the roof cuts through the darkness. A safety briefing and you’ll be provided with a helmet, rubber boots and the safety harness you get lowered in. It is a bit scary, but it’s perfectly safe! The memorable part is the adrenaline rush as you are lowered 60 meters into a sinkhole, a hidden jungle surrounded by a labyrinth of caves and the ultimate photo as you stand silhouetted in the light of Grubug Cave.</b></p> <p><b><img src=\"https://secure.meetupstatic.com/photos/event/5/e/7/5/600_458904181.jpeg\" /></b></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/5/4/b/600_464349547.jpeg\" /></p> <p><b>Watching Sunset@Parangtritis Beach</b></p> <p><b>Parangtritis is considered the most popular tourist beach in Yogyakarta. The beach has lots of activities from riding a small ponies, horse cart, ATV Quad Bike, Parasailing or just walking by the beach while trying some local foods and drinks. We will be watching sunset here!</b></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/4/f/b/600_464349467.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/4/e/e/600_464349454.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/2/5/5/1/600_464349553.jpeg\" /></p> <p><b>DAY 4 Attractions* </b></p> <p><b>Early hotel checkout to airport.</b></p> <p><b>********************************************</b></p> <p><b>Event Details:- </b></p> <p><b>Date: 22-25 Dec 2017(Fri-Mon)</b></p> <p><b>Group size: 20pax</b></p> <p><b>Package of $500 Accommodation (twin sharing), all Meals &amp; Transportation </b></p> <p><b>Exclude:</b></p> <p><b>- Jomblang cave entrance fee (IDR 500,000)</b></p> <p><b>- Personal expenses</b></p> <p><b>- Additional food/beverage we prepared during meal time</b></p> <p><b>- Return Air-Ticket</b></p> <p><b>1) RSVP and TT S$200 once RETURN AIR-TICKET BOOKED &amp; remainder</b></p> <p><b>$300 on End Nov 2017 to POSB Current Account[masked]</b></p> <p><b>2) Text[masked] me once done with Print-screen Receipt</b></p> <p><b>********************************************</b></p> <p><b>How to Book Air-Ticket:</b></p> <p><b>Both Return Flight by Air-Asia is $282</b></p> <p><b>Flight Details </b></p> <p><b>SINGAPORE (SIN) TO Yogyakarta (JOG)</b></p> <p><b>22 Dec 2017 Depart 1110am Arrival 1230pm, flight: QZ 659, $139</b></p> <p><b>Yogyakarta (JOG) TO SINGAPORE (SIN)</b></p> <p><b>25 Dec 2017 Depart 0725am Arrival 1035am, flight: QZ 658, $143</b></p> <p><b><a href=\"https://booking.airasia.com/Flight/Select?o1=SIN&amp;d1=JOG&amp;dd1=2017-12-22&amp;dd2=2017-12-25&amp;r=true&amp;ADT=1&amp;CHD=0&amp;inl=0&amp;s=false&amp;mon=true&amp;cc=SGD\"><a href=\"https://booking.airasia.com/Flight/Select?o1=SIN&amp;d1=JOG&amp;dd1=2017-12-22&amp;dd2=2017-12-25&amp;r=true&amp;ADT=1&amp;CHD=0&amp;inl=0&amp;s=false&amp;mon=true&amp;cc=SGD\" class=\"linkified\">https://booking.airasia.com/Flight/Select?o1=SIN&amp;d1=JOG&amp;dd1=2017-12-22&amp;dd2=2017-12-25&amp;r=true&amp;ADT=1&amp;CHD=0&amp;inl=0&amp;s=false&amp;mon=true&amp;cc=SGD</a></a></b></p> <p><b>******************************************** </b></p> <p><b>TA License No: 02920/</b></p> <p><b>TA NAME: WILFRED GO TRAVELLING &amp; HIKING </b></p> <p><b>********************************************</b></p> <p><b>Disclaimer, Indemnity and Terms of Participation:</b></p> <p><b> 1. If the participant is late or does not show up at the meeting point specified on date and time, the organizer will not wait for the participant.</b></p> <p><b>2. It is the participant's onus to find out and fulfill, in a timely manner, the immigration requirements of the trip destination with regard to his / her own nationality - i.e. visas, permits etc. In the absence of essential documentation, the organizers shall not be liable for the consequences of incomplete trip formalities. </b></p> <p><b>3. The participant acknowledges that this is an adventure trip. The itinerary serves as a guide only and flexibility or changes may be required. Members who do not cooperate or adhere to the instructions and advice set out by the Event Host shall be removed from the event. The organizers cannot be held responsible for any changes, cancellations or delays caused by accidents, strikes, government regulations, weather conditions or natural calamities, etc. </b></p> <p><b>4. All participants are strongly advised to have comprehensive travel insurance against medical exigencies, personal accidents, natural calamities, etc. with the appropriate coverage of activities and geographical area.</b></p> <p><b>5. The participant understands that during the course of the trip certain events may occur, including, but not limited to, accident or illness, political instability and the forces of nature. The participant agrees to assume all risks associated with the trip and indemnifies the organizers and hosts against all claims, disputes arising from his / her participation. </b></p> <p><b>**I confirm that I have read, agree &amp; accept the above terms and conditions before participating in this event.**</b></p> ", 
      "visibility": "public" 
      }, 
      { 
      "created": 1475160834000, 
      "duration": 7200000, 
      "id": "dgcnzlywqbsb", 
      "name": "Humanist Cafe", 
      "status": "upcoming", 
      "time": 1513249200000, 
      "local_date": "2017-12-14", 
      "local_time": "19:00", 
      "updated": 1493700572000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 5, 
      "venue": { 
      "id": 12982292, 
      "name": "Hanis Cafe", 
      "lat": 1.302333950996399, 
      "lon": 103.84992980957031, 
      "repinned": false, 
      "address_1": "8 Wilkie Road, #01-22/23/24", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1312726462000, 
      "name": "Humanist Society (Singapore)", 
      "id": 2303521, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Humanist-Society-Singapore", 
      "who": "Humanists", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Humanist-Society-Singapore/events/238000905/", 
      "description": "<p>We will be meeting at Hanis @ Wilkie Edge this month (instead of Hanis @ National Library). It's between Douby Ghaut and Rochor MRT stations. See you there!</p> <p>The Humanist Cafe is a free and easy social event where you can meet and mingle with other fellow humanists and make new friends over dinner.</p> <p>Have a question you want to ask about Humanism? Want to make a connection with like-minded people?</p> <p>The event lasts about 2 hours.</p> ", 
      "how_to_find_us": "Look out for our Humanist Society banner.", 
      "visibility": "public" 
      }, 
      { 
      "created": 1509674360000, 
      "duration": 613800000, 
      "id": "244772632", 
      "name": "How to make a snowman and how to win a snowball fight - travels in frozen lands", 
      "status": "upcoming", 
      "time": 1513164600000, 
      "local_date": "2017-12-13", 
      "local_time": "19:30", 
      "updated": 1511261021000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 2, 
      "venue": { 
      "id": 24175099, 
      "name": "Library @ Orchard", 
      "lat": 1.3458709716796875, 
      "lon": 103.75090026855469, 
      "repinned": false, 
      "address_1": "277 Orchard Rd, #03-12 / #04-11 Orchard Gateway, 238858 6332 3255", 
      "city": "Singapore", 
      "country": "sg", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1237191602000, 
      "name": "Singapore travel and culture exploration meet", 
      "id": 1409632, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "sgtravelmeet", 
      "who": "Travelers", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/sgtravelmeet/events/244772632/", 
      "description": "<p>This time of the year, many of us head to colder lands. Join us to share your favourite winter destinations.</p> <p><img src=\"http://photos1.meetupstatic.com/photos/event/6/5/7/d/600_454525981.jpeg\" /></p> <p>Topics for this meet</p> <p>• Favorite winter destinations</p> <p>• The most inexpensive place to go where you can make a snowman.</p> <p>• Winter shopping hacks</p> <p>• Lesser know winter destinations - Sikkim, Kachin, Northern Vietnam</p> <p>Join and us and share stories of your recent trips or your upcoming travel plans. You are welcome to come in and leave anytime you like. We request you to update your RSVP if you are not able to make it.</p> <p>Typical agenda</p> <p>We start the meet at the library@Orchard, 277 Orchard Road #03-12/#04-11 orchardgateway, Singapore[masked]</p> <p>Come to the space called SHARE on level 03.</p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/b/6/3/f/600_451126655.jpeg\" /></p> <p>7.30 to 8.10 PM - short demos, talks from our recent trips. All participants are invited to share some tips, highlights etc from their recent trips.</p> <p>8.10 to 8.50 PM - We split into small groups - you can join the discussions with people who are interested in the same destinations as you.</p> <p><img src=\"https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/8/e/1/8/600_453456376.jpeg\" /></p> <p>From 8.50 to 9.50 PM, We will head to the Food Republic @ 313 Somerset, Level 5, 313@Somerset, 313 Orchard Road, Singapore 238895. Look for the large table near the Indian and the Korean food stalls.</p> ", 
      "visibility": "public" 
      }, 
      { 
      "created": 1510684150000, 
      "duration": 275400000, 
      "id": "245110681", 
      "name": "4D3N BALI HERITAGE & ADVENTUOUS GETAWAY+MUST GO PLACES & 2018 NEW YEAR COUNTDOWN", 
      "rsvp_limit": 6, 
      "status": "upcoming", 
      "time": 1514496600000, 
      "local_date": "2017-12-29", 
      "local_time": "05:30", 
      "updated": 1511530949000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 6, 
      "venue": { 
      "id": 25473325, 
      "name": "Changi Airport T1", 
      "lat": 1.3644200563430786, 
      "lon": 103.99153137207031, 
      "repinned": false, 
      "address_1": "Airport Blvd, Changi Airport Singapore (SIN), Singapore", 
      "address_2": "Airport Blvd, Changi Airport Singapore (SIN), Singapore", 
      "city": "Singapore", 
      "country": "SG", 
      "localized_country_name": "Singapore" 
      }, 
      "group": { 
      "created": 1469372722000, 
      "name": "Let's Go Travelling & Hiking", 
      "id": 20218860, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Lets-Go-Travelling-Hiking", 
      "who": "Members", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Lets-Go-Travelling-Hiking/events/245110681/", 
      "description": "<p><b>Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.</b></p> <p><b>Join us as we will be spending 4D3N in exploring Bali must-go places and 2018 New Year Countdown in Kuta Beach with firework and wild celebration !</b></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/8/0/600_466166240.jpeg\" /></p> <p><b>********************************************</b></p> <p><b>4D3N Bali Attractions: </b></p> <p><b>Day 1: Tegalalang Rice, Art Village, Coffee Plantation, Cycling Tours, kintamani Valcano</b></p> <p><b>Day 2: Dolphins Watching, Gitgit Waterfall, Ulundanu Temple, Beratan Lake, Taman Ayun Temple and Tanah Lot Temple Sunset</b></p> <p><b>Day 3: Tanjung Benoa Beach(Snorkeling Trip),Turtle Island, Pandawa Beach, Uluwatu Temple, Kecak and fire dance, Jimbaran Bay Countdown party and watch firework</b></p> <p><b>Day 4: Relax and free time at Kuta and airport to return home</b></p> <p><b>********************************************</b></p> <p><b>*DAY 1 Attractions (29 Dec 2017)*</b></p> <p><b>Tegallalang Rice Terraces</b></p> <p>Tegallalang Rice Terraces in Ubud is famous for its beautiful scenes of rice paddies involving the subak (traditional Balinese cooperative irrigation system), which according to history, was passed down by a revered holy man named Rsi Markandeya in the eighth century. The Tegallalang rice terraces alone offers a scenic outlook that spreads down before you and away to the rice paddies on the slopes across the valley. The high roadside location is cool and breezy and it is a well-known spot for tourists to stop and take photos.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/b/3/600_466166291.jpeg\" /></p> <p><b>Ubud Cycling amongst the rice fields &amp; luwak coffee tour </b></p> <p>Cycling through the countryside in Ubud and enjoying the beautiful countryside scenery; Learning about indigenous Balinese culture.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/b/c/600_466166300.jpeg\" /></p> <p><b>*DAY 2 Attractions (30 Dec 2017)*</b></p> <p><b>Dolphins Watching- Lovina Beach</b><br/>Lovina Beach is one of the famous tourist places in north part of Bali which own beautiful of calm sea water, blackish chromatic sand and the sea with its dolphin. One of the favorite fascinations in Lovina is dolphin watching tour. Hundreds of dolphins can be seen in the morning time around 1 km offshore jumping around.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/d/0/600_466166320.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/d/6/600_466166326.jpeg\" /></p> <p><b>Tanah Lot Temple -Bali’s Scenic Sea Temple</b><br/>Tanah Lot Temple is one of Bali’s most important landmarks, famed for its unique offshore setting and sunset backdrops. An ancient Hindu shrine perched on top of an outcrop amidst constantly crashing waves; Tanah Lot Temple is simply among Bali’s not-to-be-missed icons. The onshore site is dotted with smaller shrines alongside visitors’ leisure facilities that comprise restaurants, shops and a cultural park presenting regular dance performances.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/d/e/600_466166334.jpeg\" /></p> <p><b>*DAY 3 Attractions* </b></p> <p><b>Tanjung Benoa-Snorkeling Trip</b></p> <p>For watersport enthusiasts, Tanjung Benoa beach is a must-go destination if on holiday to Bali. This beach is a white sandy beach that entered the tourist area of Nusa Dua. This white sand beach is a water sports paradise on the island of Bali, because the waves are not too big which is suitable for watersport tours such as: Parasailing, see turtle breeding on Turtle Island, Sea Walker, Jetski, Banana Boat and others.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/e/f/600_466166351.jpeg\" /></p> <p><b>Uluwatu Temple - Pura Luhur Uluwatu-Bali Temples</b><br/>Uluwatu Temple, or Pura Luhur Uluwatu, one of six key temples believed to be Bali's spiritual pillars, is renowned for its magnificent location, perched on top of a steep cliff approximately 70 metres above sea level. Pura Luhur Uluwatu is definitely one of the top places on the island to go to for sunset delights, with direct views overlooking the beautiful Indian Ocean and daily Kecak dance performances. Balinese architecture, traditionally-designed gateways, and ancient sculptures add to Uluwatu Temple's appeal.</p> <p><img src=\"https://secure.meetupstatic.com/photos/event/6/6/f/c/600_466166364.jpeg\" /></p> <p><b>*DAY 4 Attractions* </b></p> <p>Those who catch early flight will consume break-fast and hotel checkout to airport. (For those who getting later return flight will have free time to shop at Kuta beach area)</p> <p>********************************************</p> <p><b>TA License No: 02920/</b></p> <p><b>TA NAME: WILFRED GO TRAVELLING &amp; HIKING </b></p> <p><b>Event Details:- </b></p> <p><b>Date: 29Dec2017(Fri) from 7.05am to 1 Jan 2018(Mon) 10am</b></p> <p><b>Group Size: 12pax</b></p> <p><b>Package Cost: $550/person</b></p> <p><b>1) RSVP and TT S$250 once RETURN AIR-TICKET BOOKED &amp; remainder</b></p> <p><b>$300 on Mid-Dec 2017 to POSB Current Account[masked]</b></p> <p><b>2) Text[masked] me once done with Print-screen Receipt</b></p> <p><b>********************************************</b></p> <p><b>Package of $550 Inclusive of :</p> <p>- 3 to 4 star hotel at Lovina(1N) &amp; Kuta(2N) based on twin sharing<br/>- English speaking tour guide and driver<br/>- Parking Fees<br/>- Petrol<br/>- All entrance Tickets<br/>- Boat for dolphins<br/>- Boat to Turtle island<br/>- Snorkeling<br/>- 3x Breakfast<br/>- 3x Lunch<br/>- 2x Dinner (Last night countdown dinner is at own cost)<br/>- Welcome flower upon arrival</b></p> <p><b>Package Exclusive:</b></p> <p><b>- Things not mentioned in Itinerary</b></p> <p><b>- Personal expenses</b></p> <p><b>- Additional food/beverage we prepared during meal time</b></p> <p><b>- Return Air-Ticket</b></p> <p>********************************************</p> <p><b>How to Book Air-Ticket: (Total Air Ticket is: $129+170.80=$300++) </b></p> <p><b>(One Way) Depart Sin-Bali by Jet-star on 29Dec17- Flight: 3k243</b></p> <p><b>(One Way) Depart Bali-Sin by Air-Asia on 1 Jan18- Flight: QZ502</b></p> <p><b>Note: Compulsory to book Jetstar Flight 3k243 depart on 29Dec2017 but return ticket from Bali to Sin on 1 Jan18 can choose other airlines but Air-asia QZ502 offers the cheapest air-ticket.</b></p> <p><b>Flight Details </b></p> <p>Singapore to Bali (Denpasar)</p> <p>29 Dec 2017 Depart 705am Arrival 955am, Jet-star Flight: 3K243, $129</p> <p><a href=\"https://booking.jetstar.com/sg/en/booking/select-flights\"><a href=\"https://booking.jetstar.com/sg/en/booking/select-flights\" class=\"linkified\">https://booking.jetstar.com/sg/en/booking/select-flights</a></a></p> <p>Bali (Denpasar) To Singapore (Sin)</p> <p>01 Jan 2018 Depart 720am Arrival 0955am, Air-Asia Flight: QZ502, $170.80</p> <p><a href=\"https://booking.airasia.com/Flight/Select?o1=DPS&amp;d1=SIN&amp;dd1=2018-01-01&amp;ADT=1&amp;CHD=0&amp;inl=0&amp;s=false&amp;mon=true&amp;cc=SGD\"><a href=\"https://booking.airasia.com/Flight/Select?o1=DPS&amp;d1=SIN&amp;dd1=2018-01-01&amp;ADT=1&amp;CHD=0&amp;inl=0&amp;s=false&amp;mon=true&amp;cc=SGD\" class=\"linkified\">https://booking.airasia.com/Flight/Select?o1=DPS&amp;d1=SIN&amp;dd1=2018-01-01&amp;ADT=1&amp;CHD=0&amp;inl=0&amp;s=false&amp;mon=true&amp;cc=SGD</a></a></p> <p>********************************************</p> <p>Disclaimer, Indemnity and Terms of Participation:</p> <p> 1. If the participant is late or does not show up at the meeting point specified on date and time, the organizer will not wait for the participant.</p> <p>2. It is the participant's onus to find out and fulfill, in a timely manner, the immigration requirements of the trip destination with regard to his / her own nationality - i.e. visas, permits etc. In the absence of essential documentation, the organizers shall not be liable for the consequences of incomplete trip formalities.</p> <p>3. The participant acknowledges that this is an adventure trip. The itinerary serves as a guide only and flexibility or changes may be required. Members who do not cooperate or adhere to the instructions and advice set out by the Event Host shall be removed from the event. The organizers cannot be held responsible for any changes, cancellations or delays caused by accidents, strikes, government regulations, weather conditions or natural calamities, etc.</p> <p>4. All participants are strongly advised to have comprehensive travel insurance against medical exigencies, personal accidents, natural calamities, etc. with the appropriate coverage of activities and geographical area.</p> <p>5. The participant understands that during the course of the trip certain events may occur, including, but not limited to, accident or illness, political instability and the forces of nature. The participant agrees to assume all risks associated with the trip and indemnifies the organizers and hosts against all claims, disputes arising from his / her participation.</p> <p>**I confirm that I have read, agree &amp; accept the above terms and conditions before participating in this event.**</p> ", 
      "visibility": "public" 
      }, 
      { 
      "created": 1493085809000, 
      "duration": 14400000, 
      "id": "knrrxmywqbpc", 
      "name": "**CANCELLED** Monthly Rice Packing at Lotus Light **CANCELLED**", 
      "rsvp_limit": 18, 
      "status": "upcoming", 
      "time": 1514682000000, 
      "local_date": "2017-12-31", 
      "local_time": "09:00", 
      "updated": 1511255592000, 
      "utc_offset": 28800000, 
      "waitlist_count": 0, 
      "yes_rsvp_count": 0, 
      "group": { 
      "created": 1389082845000, 
      "name": "\"Care (In) Action\" (CIA)", 
      "id": 11884712, 
      "join_mode": "open", 
      "lat": 1.2999999523162842, 
      "lon": 103.8499984741211, 
      "urlname": "Care-In-Action-Group", 
      "who": "Hearts", 
      "localized_location": "Singapore, Singapore", 
      "region": "en_US" 
      }, 
      "link": "https://www.meetup.com/Care-In-Action-Group/events/240704435/", 
      "description": "<p><img src=\"http://photos4.meetupstatic.com/photos/event/6/8/f/600_441541679.jpeg\" /></p> <p>Founded in 1993 by Buddhist monk Grand master Lu, the “Lotus Light Charity Society” (LLCS) is an international non-denominational charitable organization with at least 90 chapters around the world. The primary goal of the society is to ‘benefit all people’ — meaning to improve and enhance the quality of lives of people. The society is opened to ALL, regardless of race, gender, age, creed, or origin.</p> <p>They coordinated, and sponsored monthly food and ration distribution to over 400 needy families and elderly. Thanks to generous sponsors, the needy clients we serve are receiving, eggs, bread, daily necessities, rice, to supplement their livelihood.</p> <p>Once a month, on the last Sunday of the month, Volunteers are needed to help prepare and pack food ratio according to the different zones.</p> <p><img src=\"http://photos3.meetupstatic.com/photos/event/4/2/6/4/600_443536996.jpeg\" /></p> <p><img src=\"http://photos1.meetupstatic.com/photos/event/4/2/6/b/600_443537003.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/a/3/a/f/600_460361903.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/a/3/b/6/600_460361910.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/a/3/e/3/600_460361955.jpeg\" /></p> <p><img src=\"https://secure.meetupstatic.com/photos/event/a/3/f/3/600_460361971.jpeg\" /></p> <p>Please RSVP responsibly (read: RSVP only when you can make it) as this will allows others to give their support. (Read: the more hands will make workload lighter)</p> <p>Check out more photos at our facebook page: Lotus Light Facebook Page (<a href=\"https://www.facebook.com/sglotuslight/\" class=\"linkified\">https://www.facebook.com/sglotuslight/</a>)</p> <p>Cheers!</p> <p>How to go there from AMK Hub? Take bus 22</p> <p><img src=\"http://photos2.meetupstatic.com/photos/event/4/0/1/9/600_442816409.jpeg\" /></p> <p><img src=\"http://photos2.meetupstatic.com/photos/event/4/0/2/a/600_442816426.jpeg\" /></p> <p>Photos Credit: Google &amp; CIA - Carol</p> ", 
      "visibility": "public" 
      } 
      ] 
      } 
    //let step: number[] = [1,2,3,4,8,9,0,0];
  }

  ionViewDidEnter(){

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Accept', 'application/json');
     headers.append('Authorization', 'Bearer 3257eb77-5698-3b35-935f-39f559ac3270')
     
     let body = {
      "date": "2017-12-01",
     "location": {
      "locationType": "locationHierarchyLevel",
     "levelType": "staypoint_subzone",
     "id": "JWSZ08"
      },
      "queryGranularity": {
      "type": "period",
     "period": "PT1H"
      },
     "filter": {
      "type": "bound",
     "dimension": "agent_year_of_birth",
     "lower": 1917,
     "upper": 1957
      },
     "aggregations": [
      {
      "metric": "unique_agents",
     "type": "hyperUnique"
      }
      ]
     }
 
     this.http.post('https://apistore.datasparkanalytics.com:8243/staypoint/v2/query', JSON.stringify(body), {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           console.log("Success");
         });

 

}

}
