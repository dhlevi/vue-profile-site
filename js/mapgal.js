// Templates
Vue.component('map-item', 
{
    props: ['map'],
    template: '<div><div class="parallax-container"><div class="parallax"><img v-bind:src="\'img/maps_plx/\'+ map.pic + \'.jpg\'" /></div></div><div class="section white"><div class="row container"><h2 class="header">{{ map.title }}</h2><div class="row"><div class="col s12 m10 l10"><p class="grey-text text-darken-3 lighten-3">\'{{ map.description }}\'</p></div><div class="col s12 m2 l2"><img v-bind:src="\'img/maps/\' + map.pic + \'.png\'" width="400" class="materialboxed" v-bind:data-caption="\'\' + map.title + \'\'" /></div></div></div></div></div>'
});

Vue.component('header-item',
{
    template: '<div><nav><div class="nav-wrapper blue-grey darken-2"><a href="index.html" class="brand-logo">Dylan Hemsworth</a><a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a></div></nav><ul id="slide-out" class="sidenav sidenav-fixed blue-grey darken-2"><li><div class="user-view"><div class="background blue-grey darken-1"><!-- img src="img/back4.jpg" --></div><a href="#user"><img class="circle" src="img/prof_pic.png"></a><a href="#name"><span class="white-text name">Dylan Hemsworth</span></a><a href="#email"><span class="white-text email">dhemsworth@vividsolutions.com</span></a><a href="#address"><span class="white-text email">Victoria, British Columbia, Canada</span></a></div></li><li><a class="subheader white-text">About Me</a></li><li><a href="bio.html" class="waves-effect white-text"><i class="material-icons">account_circle</i>Bio</a></li><li><a href="portfolio.html" class="waves-effect white-text"><i class="material-icons">business</i>Portfolio</a></li><li><div class="divider black"></div></li><li><a class="subheader white-text">Cartography</a></li><li><a href="maps.html" class="waves-effect white-text"><i class="material-icons">map</i>Maps</a></li><li><a href="gisMaps.html" class="waves-effect white-text"><i class="material-icons">layers</i>GIS</a></li><li><div class="divider black"></div></li><li><a class="subheader white-text">General</a></li><li><a href="posts.html" class="waves-effect white-text"><i class="material-icons">chat_bubble</i>Posts</a></li></ul></div>'
});

$(document).ready(function()
{
    var mapComponent = new Vue(
    {
        el: '#content',
        data: {
            "artmaps": [
                {
                    "pic": "VanIsle",
                    "title": "Vancouver Island Topography",
                    "description": "A topological relief of Vancouver Island Topography"
                },
                {
                    "pic": "Panama",
                    "title": "The Isthmus of Panama",
                    "description": "A topological relief of the Isthmus of Panama"
                },
                {
                    "pic": "bosporus",
                    "title": "The Bosporus",
                    "description": "A topological relief of the Bosporus around Istanbul, Turkey"
                },
                {
                    "pic": "Bougainville",
                    "title": "Bougainville",
                    "description": "Bougainville"
                },
                {
                    "pic": "fiji",
                    "title": "Fiji",
                    "description": "Fiji"
                },
                {
                    "pic": "Himalayas",
                    "title": "Himalayas",
                    "description": "Himalayas"
                },
                {
                    "pic": "Guadalcanal",
                    "title": "Guadalcanal",
                    "description": "Guadalcanal"
                },
                {
                    "pic": "haida_gwaii_shade_2",
                    "title": "Haida Gwaii",
                    "description": "Haida Gwaii"
                },
                {
                    "pic": "SouthKorea",
                    "title": "South Korea",
                    "description": "South Korea"
                },
                {
                    "pic": "Kauai",
                    "title": "Kauai",
                    "description": "Kauai"
                },
                {
                    "pic": "Oahu",
                    "title": "Oahu",
                    "description": "Oahu"
                },
                {
                    "pic": "Manicouagan",
                    "title": "Manicouagan",
                    "description": "Manicouagan"
                },
                {
                    "pic": "NewCaledonia",
                    "title": "New Caledonia",
                    "description": "New Caledonia"
                },
                {
                    "pic": "newfoundland",
                    "title": "Newfoundland",
                    "description": "The island of Newfoundland"
                },
                {
                    "pic": "NewGeorgia",
                    "title": "New Georgia",
                    "description": "New Georgia"
                },
                {
                    "pic": "Palau",
                    "title": "Palau",
                    "description": "The islands of Palau"
                },
                {
                    "pic": "SanCristobal",
                    "title": "San Cristobal",
                    "description": "San Cristobal island"
                },
                {
                    "pic": "Taiwan",
                    "title": "Taiwan",
                    "description": "A relief of the Island of Taiwan"
                },
                {
                    "pic": "van_isle_c_hs_no_labels",
                    "title": "Vancouver Island Relief",
                    "description": "A relief map of Vancouver Island, showing the topology and major lakes, but excluding populated areas"
                }
            ],
            "gismaps": [
                {
                    "pic": "vancouver_street",
                    "title": "Greater Vancouver Streets",
                    "description": "A detailed street map of the Greater Vancouver area."
                },
                {
                    "pic": "vic_west_street",
                    "title": "Greater Victoria Streets",
                    "description": "A detailed street map of the Greater Victoria area, in the same style as the Vancouver Street map."
                },
                {
                    "pic": "SoCalRoadNet",
                    "title": "Los Angeles Transportation Network",
                    "description": "The Greater LA area road and rail network."
                },
                {
                    "pic": "DeutschesSchienennetz",
                    "title": "Deutsches Schienennetz",
                    "description": "The German Rail Network is the beating heart of Germany. With 41315 kms of track, the german rail network crosses the country with 23500 rail vehicles, transporting 2 billion passengers and 350+ million tonnes of goods every year."
                }
            ]
        },
        methods: 
        {
            someMethod: function () 
            {
                this.message = this.message.split('').reverse().join('');
            }
        }
    });

    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
});