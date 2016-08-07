import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Injectable} from '@angular/core';
import {Geolocation} from 'ionic-native';

@Component({
providers: [Http, HTTP_PROVIDERS]
})
export class BackService{
    lat: any;
    long:any;
    locationError: string;

    
constructor(private http: Http){ }
    
    getLatLng(){
        let options = {maximumAge: 0, timeout: 5000, enableHighAccuracy: true};
        return Geolocation.getCurrentPosition(options);
    }
    
    getPosInfo(){
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=41.111252,-81.514024',null)
            .map(res => res.json());
    }

    execute(query){
        let data = JSON.stringify({
            db_host: 'flypapermagazine.com',
            db_username: 'flypaper_scmgr',
            db_name: 'flypaper_scdb',
            db_password: 'maxwel123',
            query: query
        });
        return this.http.post('http://dsykes.esy.es/php/adb/insert.php', data).map(res => res);
    }

    getDistance(lat1, lon1, lat2, lon2, type){

        var R = 6371; // Radius of the earth in km

        var dLat = this.deg2rad(lat2-lat1);  // de$cscope.canCreateEvent = true;g2rad below
        var dLon = this.deg2rad(lon2-lon1); 
        var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        var mi = d / 0.0010000;
        var m = mi / 1609.344;

        return (type == 'miles') ? m : (type == 'meters') ? mi : 0;
    }

    deg2rad(deg) {
        return deg * (Math.PI/180)
    }
    
    loadDummyData(){
        return {
   "html_attributions" : [],
   "next_page_token" : "CpQCAgEAAMDvs7gHmbmKkfZpGOJj2b0duev_OPBxTa5ug5dZ84A96Ay6RAywLluDFJn_s7cz2N4V2LUACeZ5y1AbWOvgRXytBBXHawhVjXkEW-2SQYvJSCp6LeOWAACJRTi2NLGb0NUszonEmyv0Q6-s5VsYmNN2Ql28wfr1Q-grQw6Bvm---cP4WQpck13S_NhjKHkCZbM23VphikKQnw-dmD3qGtd67KUQkQm5cn2KR9QfCxtYr25N9eK1ScuMopW-7nOargeJYYLYOnr9ZQ5tuOdpj5ze257tY1AvyX4TnhOO5e07-C-IRq0o6prUwhtMJJgGV_FHwNEh45tz930ZPpNusm7KgJwVrN40qSRvxUySSVmdEhApUGBgMVvTzHouY3yuGpL9GhQaSeGxoUYSWNgV3V7JBJWYO_qs7g",
   "results" : [
      {
         "geometry" : {
            "location" : {
               "lat" : 41.112527,
               "lng" : -81.50997599999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1125306,
                  "lng" : -81.5097794
               },
               "southwest" : {
                  "lat" : 41.1125258,
                  "lng" : -81.51056579999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "ff4a8be5d73c3d283bbfcf293ad108dbdebdba73",
         "name" : "North Star Orthopaedics: Cremer Steven A MD",
         "place_id" : "ChIJj__CTRkoMYgREGrLhDGkXyI",
         "reference" : "CoQBfgAAAAH-ZulrlOOSvsuEpM8YUriWpkPkt2mgM-SCkv7Tjyuj3LTzN2J7KXIOS7ZJrVeTmAspZ8ctk07U87yWahDi4hQr1SA03wbdacMr1BtAWJhIJMRQDS6DvkSAxaGfLmNZTqFgTkQYGgBYyZGgOdg-uBx7bNpTcvLM5FZ_G7W0yxZQEhA12AaWweBcvPPVVE-MP4EgGhRcd1_3sR26C4a3hxqD2jYQiT7Dcw",
         "scope" : "GOOGLE",
         "types" : [ "doctor", "health", "point_of_interest", "establishment" ],
         "vicinity" : "999 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1108902,
               "lng" : -81.5107019
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1108914,
                  "lng" : -81.51024215
               },
               "southwest" : {
                  "lat" : 41.11088660000001,
                  "lng" : -81.51085515
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "c5f7255f633bddea0bcc13672dfb5a012f655581",
         "name" : "Hennessy-Bagnoli-Moore Funeral Home",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1536,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/111781475187219902762/photos\"\u003eHennessy-Bagnoli-Moore Funeral Home\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAMrp_zY4MP8-58rIQVe5L97jk8ti79NEP4mUVZTjBeeUrE_3lx5jofm-MPgmZCm8mSHyu3xXMGmtD-tSzI2IbPIQnzDffI7nTVH04k4Mb6DkRcnQ6kRk850o43vJ_azEFVbPn_Eg48KNke1wJ4ZlsU5P7-wWsVVzOnshyrHmd2RZEhBOwJocVpadwt-ux9u4iAuHGhQLOQ48fQ-yt7C-o_u975OW4DDoUQ",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJGc0FKh8oMYgR7ilI3pk0ThY",
         "reference" : "CoQBdgAAAJdlgQQ389m_PQTEIxddqRRhoFwsHkmeNpG17QwNkIAjcfk1hLeByy2REIuBxNAacj59AVmUwx78sfiEFj9Q7Qv3lJvxhgB3vVebvnVmjmDv6UdcXKytXfshGPDtYi6PfFpWT20hUI4MvRMjy8Rn_i1kbYLVTosFRk2vuQenFeFXEhBwGxkA8-zy-64Cx15ct-GnGhT8ZQJ9YeETRnXbs808XJhiHXDXEQ",
         "scope" : "GOOGLE",
         "types" : [ "funeral_home", "point_of_interest", "establishment" ],
         "vicinity" : "936 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.11019219999999,
               "lng" : -81.51062790000002
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11019329999999,
                  "lng" : -81.51029939999999
               },
               "southwest" : {
                  "lat" : 41.1101889,
                  "lng" : -81.51073740000002
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "1d265ccf6590916b0c7e7e5f6c2f2676bfc62f7b",
         "name" : "Stage Center Inc",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJK6L8LR8oMYgRlSOlp4NMbZc",
         "rating" : 4.8,
         "reference" : "CnRkAAAAwwnNeR2fs-YJA369q8brQMTudPbZ8iuigsTwXFVJfc9emyquDgCm-s3HpD5rxi5pmbALBa2E8NVEMo2ptO1arIWbSA5vdXaJlMDzWEaGZg_oV6aWuuQQwk2exTAxsyxX8j9DKVrmghkuONUZgLxVhxIQlBZA_0C7tQOIBJxKINLqDBoUCEHOpSYmBygct_1hJi53I8Du3vI",
         "scope" : "GOOGLE",
         "types" : [ "shoe_store", "store", "point_of_interest", "establishment" ],
         "vicinity" : "908 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.112311,
               "lng" : -81.50997699999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11231625,
                  "lng" : -81.50977949999999
               },
               "southwest" : {
                  "lat" : 41.11230925,
                  "lng" : -81.51056949999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "5de9efd219c0a7339daab8f0eee5371b6926f6c0",
         "name" : "Dr. Oliver L. Janolo, MD",
         "place_id" : "ChIJvasJTBkoMYgRt2f0_nMdQpU",
         "reference" : "CnRsAAAADkCTJEk0ejIVP6EgAVaWsmvka-C0XWDpUbKPO3PxM5mdAnNt-OVlFbJ4HxOFn9A9RqgH5O_uiLnAoU-Wl-mFoFutTjuISvOAollpXeNGwJ_1o7_zQAtGnJu9hQVGZidEHmZ3wLDZR8LudetehP9XNRIQDKpStfY4nwROV4CxXBgpRRoU1PFD2cNsddVMx7Hb9w_DlgGGdFI",
         "scope" : "GOOGLE",
         "types" : [ "doctor", "health", "point_of_interest", "establishment" ],
         "vicinity" : "975 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1115,
               "lng" : -81.514989
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11150200000001,
                  "lng" : -81.51454034999999
               },
               "southwest" : {
                  "lat" : 41.11149399999998,
                  "lng" : -81.51513855
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "065cab4f4d0152738e1cfaf7388ce96f0f2f8b65",
         "name" : "Van's",
         "place_id" : "ChIJXZzqMR4oMYgRmtZQyFWn3qs",
         "reference" : "CmRZAAAAG3U7l7ejkJZIV-0P1H5_ICr6y1qJ-UAMCEzWD_i2EMJTQ7KvyY63jUFW2ckaAN8QzEXLQLRrTTGjKoWd6Ru1a9FGU1xcKkzLdAakoZ_pTXM6Ol1t8a4N-NztXfKo9gC0EhB20BxAe_5qsS-xw7ZNUjFQGhT3R9pQ2N2UBUTPgNoARZ6mSYG2sA",
         "scope" : "GOOGLE",
         "types" : [ "bar", "point_of_interest", "establishment" ],
         "vicinity" : "956 North Howard Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1125902,
               "lng" : -81.5106892
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11259115,
                  "lng" : -81.51020815
               },
               "southwest" : {
                  "lat" : 41.11258734999999,
                  "lng" : -81.51084955
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "b91644a94f410f5b4ed0d7bc1ebeea10f6759692",
         "name" : "Professional Placement Services",
         "place_id" : "ChIJaxm-sR4oMYgRLcnyeLZC3mY",
         "reference" : "CoQBcgAAAI_vtQ7bGTCXqip6ypJPnYXlilixe7blbFYHodwl1o-3v_lrTKPslFdPkc0ibX2BQwPQyrWCbTsNIy__xZKKpFqgWAf0DhdO2mJJb3UPx_BaOx8SjLQ9lss_rSPiX91fJliP1Mtz_SGmnwJoR91r6yQEhNxybV4TdlkQBRrfE0XgEhAF1vMO9WaSbYCGi1uixxjrGhQlyMVP3DfgNL8joITcY2D008YQhQ",
         "scope" : "GOOGLE",
         "types" : [ "point_of_interest", "establishment" ],
         "vicinity" : "1000 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1093787,
               "lng" : -81.51067290000002
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.10937885,
                  "lng" : -81.51028035
               },
               "southwest" : {
                  "lat" : 41.10937865,
                  "lng" : -81.51080375000002
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "8b779a4dd6b2273c4e7198c1f7948e90bf3dd653",
         "name" : "Crest Bakery",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "place_id" : "ChIJ628gTx8oMYgRYXCbJxinykY",
         "price_level" : 1,
         "rating" : 4.2,
         "reference" : "CmRfAAAA9_wa0kLT3lc0ccd3OeCfP-N6ruPxDdc1fYJQC5AgvZ4hfFLqNqCw4jnKmf0JLTLfHkAUk-PSP_m4CdKnk9d-96XtKgrkIPNxZoizgQNX-hptCdBk9Ls3Ns4oxIgdpo1aEhBLsPdJkyo_rO8nobk3z0_vGhQW2kEHvwLEzQGZYXfAPuj6p6UrKA",
         "scope" : "GOOGLE",
         "types" : [ "bakery", "food", "store", "point_of_interest", "establishment" ],
         "vicinity" : "880 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.112527,
               "lng" : -81.50997599999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1125306,
                  "lng" : -81.5097794
               },
               "southwest" : {
                  "lat" : 41.1125258,
                  "lng" : -81.51056579999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "76eb32272f692499f558cd4f95de4bff604acb6e",
         "name" : "North Star Orthopaedic Surgery: Kunig Richard L DPM",
         "place_id" : "ChIJj__CTRkoMYgRTnDdPHmS8_I",
         "reference" : "CpQBiAAAANA6dvgUEjNgYK1j4GDSd1nQdhG1LNjgyCpKRAMi6I1G09_4Irf8XBEB1NAIXIER-sPfrhVHXL1663B5s6viBrj_nMWjz5kTgwb2b8bof5puBWa6cr3B5_HpQ4PlbhipRwcCOnzwOxcj7k9hsAm_w95EL4hLVDnWNuZwAYbQGdsKX-EdprXQVmXlB0q4xJk-zRIQKopHM7zAcHn2VQKPJ8rg9BoUtuCg6-sfGeEspssjkhFJ3flDKYM",
         "scope" : "GOOGLE",
         "types" : [ "doctor", "health", "point_of_interest", "establishment" ],
         "vicinity" : "999 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.112527,
               "lng" : -81.50997599999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1125306,
                  "lng" : -81.5097794
               },
               "southwest" : {
                  "lat" : 41.1125258,
                  "lng" : -81.51056579999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "c7a2aef71539dce2609f9779c6e8abfbc8b345c9",
         "name" : "North Star Orthopedics",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJj__CTRkoMYgRD3qqh2rI5ho",
         "reference" : "CnRpAAAAljQCMRjvwR1HiM02aefMZ9Ufm3JOeJq_99fsenpmvEsrca0cSP9tVrrDVdHDwzQbiPg6uWCJTI0bc66VG_BTpRUnEARCLUZ8n8cEJ7bxV5CqjkGK6rx88l0YQdrII5qrav3jYnE-O7BzxPMhCoBYaRIQ6sxf9Tpd-XY8VfQbASHk6RoU9FQiujmPdNy7hPuaXTZzrBn72Pg",
         "scope" : "GOOGLE",
         "types" : [ "doctor", "health", "point_of_interest", "establishment" ],
         "vicinity" : "999 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.109888,
               "lng" : -81.50987599999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.10988815,
                  "lng" : -81.50960824999999
               },
               "southwest" : {
                  "lat" : 41.10988755,
                  "lng" : -81.51067925
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/civic_building-71.png",
         "id" : "7b1e8b137701df2a70a6347a7271ba942958cd65",
         "name" : "Community Aids Network/Akron Pride Initiative",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJT6XkzhgoMYgRYjE0Ut5viRM",
         "reference" : "CoQBgAAAAKWq2bqcrWRHGAo79fyA40ZEHnXSKWXjluMmIIIupV8sckjkcrRasSp2Nlx60VRnvYf4CQTzQjGD6fJqDIpWdNWTCxQiVRgFvS-4ZfpiiIdCqG3aW8HRsIQt8_RdhKKh4uBLYyadNMRIJaTRn1SRndMGQWMwztIYiOHXLW9BDaROEhChT4xC9W383mWHy8TNP4nuGhTqIDOcuCHgNn4zOGcS49WVZWZO5g",
         "scope" : "GOOGLE",
         "types" : [ "health", "point_of_interest", "establishment" ],
         "vicinity" : "895 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1125917,
               "lng" : -81.5099733
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11262309999999,
                  "lng" : -81.50977534999998
               },
               "southwest" : {
                  "lat" : 41.1124975,
                  "lng" : -81.51056715
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "e5a9ee6d140737559fb98d36721b4992d50a8d2c",
         "name" : "Tharp Jeffrey S DO",
         "place_id" : "ChIJj__CTRkoMYgRTRUreL41AAQ",
         "rating" : 4.1,
         "reference" : "CnRlAAAAT-bXT8Ffd1h-MU20BSTAVc1VvJzfE1f2E6fuHA4L-xcm7C-RA8Kn8eEyWswL6XUVHK8iQp5slCFy6UKS5nq4CSJ8HKmlOwFlao-zqFLTzGTQWnS7e7GJQfsx-ZXN3VknhSfneeiRzEl5MFrw-_zTYBIQrzTEKqKK8mypLn4jd874oBoU39TTBEyWYlnYobd9mWzZEGDaupY",
         "scope" : "GOOGLE",
         "types" : [ "doctor", "health", "point_of_interest", "establishment" ],
         "vicinity" : "999 N Main St, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.11102899999999,
               "lng" : -81.510712
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11103034999999,
                  "lng" : -81.51023425
               },
               "southwest" : {
                  "lat" : 41.11102494999999,
                  "lng" : -81.51087124999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "218b04f3a2cba6f5a288b4c6da69dfd7c42718a2",
         "name" : "Modern Sash Repair",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "place_id" : "ChIJw9MP1B4oMYgRnIL3JQrlaSI",
         "reference" : "CnRlAAAAJgeV0RMoGUehGAZvKTa8Pu4kPPcyAOTDPQKs2EznCpIufTRTixFe9VMcVpjLsXiaMouHn7U8Vhzv5av4Jby0GUOIzXCyoWpQJeh88oCRLoIgcOZRck42T9KtM-aUSphoiAleUd5H-J7n2kM-L8J0mhIQj2hF1W3HTtcmHFydQJ5OFxoUNjir7jMGgPzHCeZ5Z8wMd4IxHAo",
         "scope" : "GOOGLE",
         "types" : [ "point_of_interest", "establishment" ],
         "vicinity" : "942 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.112311,
               "lng" : -81.50997699999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11231625,
                  "lng" : -81.50977949999999
               },
               "southwest" : {
                  "lat" : 41.11230925,
                  "lng" : -81.51056949999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "5a286386c7a3ff1c45ab6a43683a418bdd035bdb",
         "name" : "Nancy Lyberger, CNP",
         "place_id" : "ChIJvasJTBkoMYgR6_qQOxqVotA",
         "reference" : "CnRnAAAApWPTrLbaDSSZh0K1gXNSuBn76TdvYZvjf6ZPblTKbj0LaO1TTLT07O0_ye4eFfG-q2Jvqyp8zY8SweSilOFGmt_3ZO4aPvc879yV90_0yrNStTDO-FnUq9G0spDvcB9-rVqyJGzVu5pUBjsqHMkqTBIQmcmarE3OiuMyg-oVf63tLhoUy2nz5KEgStNCtMy5aX9AaYIq3_A",
         "scope" : "GOOGLE",
         "types" : [ "doctor", "health", "point_of_interest", "establishment" ],
         "vicinity" : "975 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1125902,
               "lng" : -81.5106892
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11259115,
                  "lng" : -81.51020815
               },
               "southwest" : {
                  "lat" : 41.11258734999999,
                  "lng" : -81.51084955
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "fbeddab04aecad6b05c8d6f1338dde2baa33e1a2",
         "name" : "Boss Security & Safety",
         "place_id" : "ChIJLwimLiTWMIgREHvvs7Ac61c",
         "reference" : "CnRpAAAA_p-DmY8Gcyz6pqkvHSh7SItQlaFkSjjWlFxC1_L4oZQHEBmkvJJOJxkUY3M3iRPlAbPetYgwJSDw8Tq_BX6wGWrrnK-HHG04c6QRX1ASK22UY0APg69_PQ29aImjj_dcwUpK9H97MPmxjb6U4pVYlxIQkOt05cCQVGNC4mITDWmdGBoUsI2dUhjSVJ9Hr2B9dqpDO06KuwU",
         "scope" : "GOOGLE",
         "types" : [ "point_of_interest", "establishment" ],
         "vicinity" : "1000 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1110287,
               "lng" : -81.5107122
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11106844999999,
                  "lng" : -81.51023355000001
               },
               "southwest" : {
                  "lat" : 41.11101545,
                  "lng" : -81.51087175000001
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "a615e0825664f7871765c7cedd9fb7fe295c6ca1",
         "name" : "On3 Photography",
         "place_id" : "ChIJw9MP1B4oMYgRRfx6O23O0ww",
         "reference" : "CnRiAAAA1sTKy7WpaXPmvD_dzZOyq04R266FRXVtAvzLygIMxyXW-nG81jNkZr3qPDlsFdZ1RCRbP5SqLXgXDpT50thE8AVauujinz02HhIWgo6VcVfTO7ySwzUpJyocFlvQ1NPV4Hy85Ok8F7gAiy1lplBYVhIQvxd25Th_c5Cb6RBwLnIFeRoUtpNUZSNgxdBCVtqipBwNWgxaNJ8",
         "scope" : "GOOGLE",
         "types" : [ "point_of_interest", "establishment" ],
         "vicinity" : "942 North Main Street #26, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1097165,
               "lng" : -81.51592309999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.10974909999999,
                  "lng" : -81.51592235
               },
               "southwest" : {
                  "lat" : 41.1096231,
                  "lng" : -81.51592334999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "6f092e2287e17ebe2ae034ce32df231b72b8ef36",
         "name" : "First Choice Bookkeeping Services",
         "place_id" : "ChIJHymeH-DXMIgRimstgQrG104",
         "reference" : "CoQBdAAAAAdURsMmM8CikiuYeFNUk7ktSks2dDQqjLrudegXeHqcccFa7Yid8moh66tDGIB7YFyIGcSr3uCpng9SEWg28klLUfJgaOQtdJkutCQFbEDYZ6zh5mvGCed_uKMChv_OKFEfQbeGai9D_OVojGcNWJik3__CYfDptzcb4L9XjsUzEhBqFdLZ3Dms_xHsN6s0bSJzGhRM1t-laItPiaiF7OLlIJPzLtQQbA",
         "scope" : "GOOGLE",
         "types" : [ "accounting", "finance", "point_of_interest", "establishment" ],
         "vicinity" : "31 Alfaretta Avenue, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1110287,
               "lng" : -81.5107122
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1110299,
                  "lng" : -81.51023415
               },
               "southwest" : {
                  "lat" : 41.1110251,
                  "lng" : -81.51087155000002
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "fab9ecb9e94cf774b1296f42f89c570ec07c2472",
         "name" : "800 Tax Refunds",
         "place_id" : "ChIJw9MP1B4oMYgRnghLytyllaQ",
         "reference" : "CnRjAAAAWSN1VgkftkPyXAcz6TGt8B7dUBPeuz7CxSIEPIxmWNv4WRlvkEqBj7MgTvjeRb0dfsjHvH6DDvUsMIRONEyFu7jC7-1QecqEGqlmHaPz86VzxDhvUSbUPn7PR2cSGpUvqxpdi577QFSiwcl5GeNKUhIQXWYaQNRmP2_8HkbqFAAlnhoUxYqq5kyEPa1OA2Q6Gq3g6nPTkJE",
         "scope" : "GOOGLE",
         "types" : [ "accounting", "finance", "point_of_interest", "establishment" ],
         "vicinity" : "942 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1126148,
               "lng" : -81.5100819
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11261735000001,
                  "lng" : -81.50993875
               },
               "southwest" : {
                  "lat" : 41.11261395,
                  "lng" : -81.51051135000002
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png",
         "id" : "e48ad9faa9ad152be8bd9ac196bcf04f9f4f7a3e",
         "name" : "Summa Physical Therapy",
         "place_id" : "ChIJHfqATRkoMYgRTADT6SNM2vo",
         "reference" : "CnRqAAAAlSX-TPyLDdc-7gvDrGQR0VlC8QhvenYWlREStagLKhKRXjdoXegpfeIx9YP-a-QUfCelmxv6RzcjIwkhkt9BWFjBJ-MyvHbzIXGP6_SS5vP6rmdwteYamojsltHe8mId-elvYhcrTZwJfDjY_eVitBIQsrr6iEvyAYLF9QsBFPrTKRoUZMsYa52GZetunpVYJtS1ZYBN7d4",
         "scope" : "GOOGLE",
         "types" : [ "hospital", "point_of_interest", "establishment" ],
         "vicinity" : "999 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.11343,
               "lng" : -81.50998
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1134372,
                  "lng" : -81.5097923
               },
               "southwest" : {
                  "lat" : 41.1134276,
                  "lng" : -81.51054310000001
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "cb481510dcb1c64eeab7e1134181fa6fa01960fd",
         "name" : "Carpet Floor Pros & All Amer",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJYR5j_xsoMYgRaNugwaQDU-M",
         "reference" : "CnRwAAAAlhdH2UOi6S6cWdxLX_SuN82IZ5QQBbQ2g_8LmizPD8sTMQHrqB0xXfDqRl0r-rwTTePRrWhMFBEi49ssCFeshK7_i7xcfujnkymJdXQyW1N3lmJjlqoXODsVE_wan3kaBaelPus-9gWob622B9qxhRIQHYcVsR4oDetoIfxDB9hehhoUZRoyc7E_CtpiB62eBcVOaTgj99o",
         "scope" : "GOOGLE",
         "types" : [ "laundry", "point_of_interest", "establishment" ],
         "vicinity" : "1027 North Main Street, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1103137,
               "lng" : -81.5097468
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1103236,
                  "lng" : -81.50941690000001
               },
               "southwest" : {
                  "lat" : 41.1103104,
                  "lng" : -81.51073649999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "366767d0e21195b703324d8c7dbbe34f6863485d",
         "name" : "Trinity United Church",
         "place_id" : "ChIJEfTh0BgoMYgRe_uscf0NVbI",
         "reference" : "CnRpAAAAGRjjsN7W_hRJNMDFPRudNAT2ti8mOczDE_PccacQJP6wyuvQpGr5ACPZvF-buu5eMvqrk0ksuONJxhpbQ1RMVvUN_yyeARrJK8Hg5m-vlONIm2Rjdnrr6bqUBQRUQQ91fxUkie1cRvpai1zCZDnLthIQJUVADSnW9lgGBmc8FWFgmBoUOiaW1e8d7hBncLMFeAjgQlRSol8",
         "scope" : "GOOGLE",
         "types" : [ "church", "place_of_worship", "point_of_interest", "establishment" ],
         "vicinity" : "915 North Main Street, Akron"
      }
   ],
   "status" : "OK"
};
    }

    getWebData(url){
        return this.http.get(url).map(res => res.json());
    }
    
    getData(query, all){
        let data = JSON.stringify({
                db_host: 'flypapermagazine.com',
                db_username: 'flypaper_scmgr',
                db_name: 'flypaper_scdb',
                db_password: 'maxwel123',
                query: query,
                all: all
        });
        return this.http.post('http://dsykes.esy.es/php/adb/adb.php', data).map(res => res.json());
    };

    plrWatcher(){
        setInterval( () => {
            console.log('Set');
        })
    }
}