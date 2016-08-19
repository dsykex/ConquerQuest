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
   "next_page_token" : "CoQC-gAAAN6iky1ydua-GhVA8Z-IZ1mIAwy63haGeinSGq1lmo5jw15Ai3a5b3mO_VGhHSFOX6eLvAv2-qCEekxdvjBPm3SSNjabk8wiPlCY2BJugQTlUu44zkJrLC-prdgwP2BC-bEqy5z_xkZDM-FyvyLCXfAdB8NSGAsPgJ02qjH51d8Bao36oe-v0yclN2DOlSnDN96_eCofNAc7WJ1rJh6dUJylEQspy5dEq3DPDc4wDsib2_kn06QYYdj4yLAvPBgjw_j7nC6ZQIRYSYMNyhv58VKoZX30ZgWLLsiLjlLSKmyR8OtSaUaAt3SMl7nbsZc2GsjnIiep0zV1WLMEeOk5p2YSEPqQy8GOJ9gPiuhjjKzNhAsaFIB8x5dxQBg2-zulyZLQTzmhz9NJ",
   "results" : [
      {
         "geometry" : {
            "location" : {
               "lat" : 41.0767944,
               "lng" : -81.4098779
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.07820244999999,
                  "lng" : -81.4079804
               },
               "southwest" : {
                  "lat" : 41.07632505,
                  "lng" : -81.41051039999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "908a1a8aa475163e1b8d32ff4f8e0a06321a7f15",
         "name" : "Summit Racing",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100566410633515620631/photos\"\u003egil beau\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAANHl9pDgsRtg0otuknim7C92QGvtHVt-Z8d0pek2omCe9J9Z6OMtp2SKhVXUwMId42i83j_eQIWUQLcfLXaMidXFeMXLF_a_2q_3gTwd4GdTPDw0GEKmtB-kEZqifMpQ5z9xpB6LPR1uNFFPr4pqEMvKanbIj4t2xdEUO6ujsO1mEhDWyZzkgIvnN_SCaWlbBo6_GhTl9UcTscfrkzuZhPYv7chcXxC_mg",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJ-yPnfWbWMIgR0yzeZZ0yYJI",
         "rating" : 4.4,
         "reference" : "CnRhAAAAQUvMjqpBFFpedoasoSxRfXlRg2J8YmihEv7lgNjaXR-Bf2cj3wn9H6SFokaud6ybzH2RQgiK9wss4Ia26shyCz1E_CR2VAeTk8R3moUNgXoWqlble53eoo0odGCD3kNAExjNUAXQgE-KNZlGjCxlLRIQXHjtvgUxdidPYt3cRyT75BoUdgfNPzTLvSUr18pXYA3geK6ykxw",
         "scope" : "GOOGLE",
         "types" : [ "car_repair", "store", "point_of_interest", "establishment" ],
         "vicinity" : "1200 Southeast Avenue, Tallmadge"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.11394780000001,
               "lng" : -81.4686445
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "432a91a637636f170220ee8ddba2cd9ad42c399b",
         "name" : "Hot Topic",
         "photos" : [
            {
               "height" : 1000,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/102566074410950833720/photos\"\u003eHot Topic\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAAM4yLVkS_EFADUTjxv_7k396iipFqDwDpCpnfBmUFUBhLeY3qU1HIBHkoUhBcSbW30dxQ4_XEiYfGbi4Oq5pvkXJOCzTfQmivwSkfubXY_kfSjKLvtiudvZG8BphGh2qtyDY8srsI4Uvzvs97EWEsx9k0WlLzlz6ITye5CEH7LkEhDs8i4HQVgI763qQTScX9IZGhTyWhAGyrZi0Yu8D5apX747B6_1-Q",
               "width" : 1000
            }
         ],
         "place_id" : "ChIJvensg4goMYgR6W6As1xr_q4",
         "price_level" : 2,
         "rating" : 4.6,
         "reference" : "CmRdAAAASurcoOl2sa6fm-7yMKQtG0EONFHlsNKP0NYx-c-It7RuIjGQmcevVPUv-2UUAHbeYpOi73hn9chwob9ft6f2nJY7D_BzPFN4FT3IWldhXMVS3He4s7hEJKfmY-n7448OEhDe5l-5lz2rPFgZZY9KOBDQGhRHpfvf5F8Y7ve3to-_xnpO6yKFBw",
         "scope" : "GOOGLE",
         "types" : [ "clothing_store", "store", "point_of_interest", "establishment" ],
         "vicinity" : "2000 Brittain Road, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.10093209999999,
               "lng" : -81.4552728
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.10205065,
                  "lng" : -81.45523004999998
               },
               "southwest" : {
                  "lat" : 41.10055924999999,
                  "lng" : -81.45528705000001
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "bdded699a2e9d27028cddaf00c0ee42887840837",
         "name" : "Prestige Auto Group",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1536,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/101348719378253367335/photos\"\u003ePrestige Auto Group\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAEW2mIN5K-pKmZuA1iI7kKcNnrH06E3VzmRg5y5U-5SZNWTGkSsgqmkh6BwLJ8TuZZamNdSThQGHUeMqGnQYb4LzlPJ_cDum9Zvk7D20kFA-dcsuwfRzF6LEh8r3m0yJcv98h5Cz1E_UFGT3h0TL5Mr-E50bwW0pbWmvc0X3I6vHEhBboEsV-91k406-bv9PeO37GhRuRG5C19NaMabq5gvV4YC_WUUO1A",
               "width" : 1539
            }
         ],
         "place_id" : "ChIJHb0MiOsoMYgR54IxKH2gdaA",
         "rating" : 3.4,
         "reference" : "CnRnAAAAQ26Mq0laglJyVQ7egSygRrDowWgBpJmwlx-aZmgh4PP1b2t_BC1OP7Tl3pIO7w-NS51FCntJnoIiSWeAjT6kKkK-mIlMIyH4bVrSDSaKVsd98M7uGOz0gl6zPETAOxyBgDuQe0W22d13TS8-puBPjhIQS5yEDEDFvtsaaWuwdu6lfhoUuUXjL1ttmbw5OixVCTgQwcPowmg",
         "scope" : "GOOGLE",
         "types" : [ "car_dealer", "store", "point_of_interest", "establishment" ],
         "vicinity" : "355 West Avenue, Tallmadge"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.16581179999999,
               "lng" : -81.4800058
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.16629334999999,
                  "lng" : -81.47544534999999
               },
               "southwest" : {
                  "lat" : 41.16436715000003,
                  "lng" : -81.48152595000001
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "746ee03f8920c6f077638b14eaa12412fb71df35",
         "name" : "Walmart Supercenter",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3006,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106846679150525688635/photos\"\u003eDavid Spisak\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAOT0IJ5jLIjWPfNMQ0PmNldnQwxf7TKYKM1vvJuwdRsNDXhOg4g_HucWMmQzbfKkONpIuju9Hz3wULyTgbjOjLkP0o2eayHokJimuqNQ-u-xJZ0f-I5aL4diQ9U8m3E-lupqCqepXzlFz6BMmIIApCwgRk_Bp--oa9VdFhqsvkqUEhCKjDj0qvajaBTjyHSqbWfJGhQ_ZJWZeEEGKq00jFxB1IiAFfEArg",
               "width" : 5344
            }
         ],
         "place_id" : "ChIJ8SFcH6onMYgREwvn01MAhsM",
         "price_level" : 1,
         "rating" : 3.5,
         "reference" : "CnRnAAAAqQ4wWIMXabJscWbTlOq2KezbAylYVeDXKMPNvia2eTr-Wg4XSE2NmUxwXK7ESJccNA2bmvm_aMXiwE7pCX_NLfM8l5SbRLe6mlAjPuTWUNnZlnHI_oG0ygNlll54vC9EUn0Sc8fQTKqzL0nDl6PbCBIQ7mp-1aIW79RJfOoJ5JhjiBoUYyyfOvGJOrn-m3y1WQZRevJ_Qcs",
         "scope" : "GOOGLE",
         "types" : [
            "department_store",
            "electronics_store",
            "grocery_or_supermarket",
            "food",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "3520 Hudson Drive, Stow"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1912884,
               "lng" : -81.5607242
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.19258609999999,
                  "lng" : -81.5606093
               },
               "southwest" : {
                  "lat" : 41.1873953,
                  "lng" : -81.5610689
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "b9cb0c73c0f672bbe25c87d01fd9fb3a85ad2e8e",
         "name" : "Blossom Music Center",
         "photos" : [
            {
               "height" : 3006,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/115119922273880121117/photos\"\u003eBryan Nace\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAAMayopD6jM77X20pWMayilFC0m4DgDo8mncLCxnaRnjCc0KaCUhN3zt61IOIkOFx_ftUQIVuD9-lkp4iYqgark42G0pvasL_jQdhgGoiz6jWXHlGFJ4SCVBuVJRsVYdoENWg7vG0fMs2Og35j0DxgVPvEw_wB0J-F2aI8bMBEjHEhCz4xn0HIQhJY9dSSE_DEAsGhTAwJHKQ_pNkgHTJRQes3yqjadOsw",
               "width" : 5344
            }
         ],
         "place_id" : "ChIJ0V9BLvvYMIgRJMKhdEYo1vA",
         "rating" : 4.3,
         "reference" : "CnRoAAAAYUjDbORHwmxk0QvHEWZ_Z2dykQ-UpReaWuzk676Mt7tr6zcwVKVOEVQ-5vjGTP8a2_LsLWWEfMxkJPwT4LIdvREX3SiZX-c7V-79KeGy1vyQ78LZFZEJWVZU4ztwCzaAdNCjibmWRShDzvb33GdHfhIQSUVA8oVIsc5DHMnkM2O0iBoUwVkcyfhoI0k2oN5DVRTW79Hcr5M",
         "scope" : "GOOGLE",
         "types" : [ "store", "point_of_interest", "establishment" ],
         "vicinity" : "1145 West Steels Corners Rd, Cuyahoga Falls"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.0767938,
               "lng" : -81.40988560000001
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.07820664999999,
                  "lng" : -81.40798165
               },
               "southwest" : {
                  "lat" : 41.07632285000001,
                  "lng" : -81.41052025000002
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "72d5c9ba30993aca74fa0b2d09d9f47dd9b38081",
         "name" : "Summit Racing Equipment",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJ-yPnfWbWMIgRGucITehbm4Q",
         "reference" : "CnRrAAAAB4ES1E41mAryO6RhAhjRTRpCReN3qGQxhdiRaLHzxXpaNTnu_A_egebwXQ6reYH_ANrRufFmb3-XYkFWeB_QO6dVs9lfHKWKnFB50Wk3dF8yT55xvIcSJ5dmiPREO26dt2Xo8HC3lTY7biSUVJl4QRIQDXfwZ04vVMqK4LUYnhZgvRoUxeh7zvD4HYht0_6QTYIyexPyqu8",
         "scope" : "GOOGLE",
         "types" : [ "car_repair", "store", "point_of_interest", "establishment" ],
         "vicinity" : "1200 Southeast Avenue, Tallmadge"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.13951599999999,
               "lng" : -81.6128719
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.13965469999999,
                  "lng" : -81.61171039999999
               },
               "southwest" : {
                  "lat" : 41.13909990000001,
                  "lng" : -81.6163564
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "7dd39cf79a9e55d6ba86e73f97c88231b4e4f6c8",
         "name" : "Sterling Jewelers Inc",
         "photos" : [
            {
               "height" : 1683,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/112638696893196831419/photos\"\u003eAerial Agents\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAPaYSWIRV1RhM-WDC_E6lQTeSoxLcvc9SzBIEvVBYaunXscstw7eutOkHkO8PrjoqlE5zFudB2N3jrkzajQcjy8A6-RDsBqIuQyWI3hMLYWWTarBDnb1eNgGu1E12s4ZXPDNoyQgtGLG4fSZMn3Cfvye2vFOZJbnepWENNsn3NwPEhBlEwyT0PmUCT_-FFR0R162GhQS_GCMYD4B4ubOup120ZRPMSYr7A",
               "width" : 3267
            }
         ],
         "place_id" : "ChIJ7QPbQQbaMIgRZ6tH5OSniyM",
         "rating" : 3.7,
         "reference" : "CnRoAAAAF5VFgRsdU_M6NNrYs-89qwftlwdzVpbt_Kxo6KybS3S3pJlLi9rvep94pwMN1MKPCYWy-ZcvEVkLrYG9kow5Sou2H_lRkZX5ErushhMsdPX76arVmpTw23JkHWdmlVOEPSy2MEJReO1DZf6szw013hIQ0s78qE3yN3esUsnHUYaHUhoUChmAgr2_aHLA1T-Jt9vcvHZTnTc",
         "scope" : "GOOGLE",
         "types" : [ "jewelry_store", "store", "point_of_interest", "establishment" ],
         "vicinity" : "375 Ghent Road, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.0478027,
               "lng" : -81.442319
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "255c77b541ef6fe6352c81453980bbbc09ee6549",
         "name" : "Hoffmans Ace Hardware",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 250,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100774958225816073261/photos\"\u003eHoffmans Ace Hardware\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAACERUBBkja48xjktKoLDiC-gNONuuCf5guUTktRnK_foC9zlmQteLrKw-logx0wi5tJkrBRC49zrn2_84SuHgfMjvwwBLTvIT47s_nPawz-2sgC_PZGqgFzkZlCVqQzi4q9acHiOxFVDTSBQvQ6evZn6f8jmUvxE9CyT5O7De5YVEhByCKtFwENNAUoOsL6XpErTGhS0SEd5k0cWd1tP44y0yWbOCZFahQ",
               "width" : 250
            }
         ],
         "place_id" : "ChIJz5EBnVkpMYgRtk5WISut8bg",
         "price_level" : 2,
         "rating" : 4.4,
         "reference" : "CnRpAAAAfWTL_jHjBju4b96BGq4Q06S-zEowTyfJuWc2lFaZI8rg9SH-ywVo6XdrgiuJx4HYIYCIjFQmh1E8TXKl9uOBaKERQDRIqtVKvey7at78IhpTksrOosgTGZ8mDpF9E2gt0ogqWzuVrWKo_MkYjXIaxRIQ2QYPG0LueM9lawvKd0pGlRoU_3OP_UeHF1pomdsf3GOOcmGbh0Q",
         "scope" : "GOOGLE",
         "types" : [
            "hardware_store",
            "home_goods_store",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "2420 Wedgewood Drive Ste 23, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.11394740000001,
               "lng" : -81.4690782
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "be04f9070318f6d748ac2de8b0e1efcbf0565294",
         "name" : "American Eagle Outfitters",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 504,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/117666248257645433667/photos\"\u003eCheryl Eagle\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAGlBLMsEAG2NXi_jYs84TMKd46mclgLnCD9SO7BtUCufvO_bvp4_llFbsKM8ukyvf7W0kEKsoj9-mAwQTFd_mD79Rq7CvkWBa4xxa_vzRmq_s4lJbtvvaJlglEqQZ_aJM9cqZ55sHE1LHs5VCqPJNIiUycOAXeyLSCNuen8x2dYbEhDomvKUHk4CGVD3Brp_UF7kGhSG8VhOhrEWr3UP3y3ZWA_QN0isdg",
               "width" : 450
            }
         ],
         "place_id" : "ChIJVVVVlYgoMYgRgpVSAREtB78",
         "price_level" : 2,
         "reference" : "CnRtAAAApaCMTyaq8nV8Vc3IJAAGzNG-iLZ2p33GmKlERzCSluHwfczx12uQAyor5g21zZoMK2wOm6buOQwLl8r7hCyAtuDOElUNDr_eWI6vWZoCVda2XJbOvyK85eKRhx3OmcJCgX4f4nXEKFr5KS8nVdLq6RIQriJrnxriZpiRKhddkWOyFBoUl5sTgEwHHjXz9jXujl-GI3XxsF4",
         "scope" : "GOOGLE",
         "types" : [ "clothing_store", "store", "point_of_interest", "establishment" ],
         "vicinity" : "2000 Brittain Road Suite 350, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1342908,
               "lng" : -81.6178918
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.1374423,
                  "lng" : -81.61206059999999
               },
               "southwest" : {
                  "lat" : 41.1310875,
                  "lng" : -81.6217166
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "7b1090ae451294a0eebf187694f5c74cdf54856a",
         "name" : "Summit Mall",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 667,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106791131223884018501/photos\"\u003eSummit Mall\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAHP34RE_-GBtt2l6AK8B5teXC1vgScT-GiIWyXazl8tUcyqABiOd70xtq4h3nRiTWEE6r84eF7qr3ShL9AynUNQc_ma-fSmmBeQFgYSChntUNgGeYe3HmnSEk-j2057ENKamd_CNxxm2M2sIdaT3f5wGZ45ExGO0p6OLNVRqkXDZEhDwr6nluT9w6uQk5Ku4D6icGhTTw-5nMBNe8KIk0ndD_sLVGiEP8A",
               "width" : 1000
            }
         ],
         "place_id" : "ChIJDQacHqfQMIgRgKWSFwXomaI",
         "rating" : 4.2,
         "reference" : "CmRfAAAAayHVoUz8MyOdxYDXeUXDIo6p_kYGYC9_MKOd2AgAZoNxwgRmT7_W8MvL0zhfKRZFDR6AHhsfYV-mijKBs9c8Z0WBNxQHgYrrJuc1kYXEab4HOy9LV-CQhfYLKRiatO8LEhDAQ3vtAKjooeIKSCed-iAjGhQLUsKzuT6rlADIQJp4rQ6rgn-SCQ",
         "scope" : "GOOGLE",
         "types" : [
            "shopping_mall",
            "department_store",
            "jewelry_store",
            "restaurant",
            "food",
            "clothing_store",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "3265 West Market Street, Fairlawn"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.115104,
               "lng" : -81.468721
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "4ab4e50e6293ef1cec18a8ab7efc09b89fadb8a1",
         "name" : "Lane Bryant",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "place_id" : "ChIJvensg4goMYgR3685_CK2Owc",
         "price_level" : 2,
         "reference" : "CmReAAAA7xMwVba3Clzb4nejCkTUI0VlT0h8DOLTBbxm-Ob_qyFD5_TwND1OyhCIzUIqvSXbbGMGa7a7sJooT20BuMKz1e6GeurxSu2N5xAVmj1qrNreMpPpBSTn63I0Rrv3NVjNEhBCgO2iB2z98nKcS-uv9cb-GhTLWIkFho4g_QOkxYwMfmfrjVqBtA",
         "scope" : "GOOGLE",
         "types" : [ "clothing_store", "store", "point_of_interest", "establishment" ],
         "vicinity" : "2000 Brittain Road #1021, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.01197130000001,
               "lng" : -81.55249719999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.01222180000001,
                  "lng" : -81.55247845000001
               },
               "southwest" : {
                  "lat" : 41.01121979999999,
                  "lng" : -81.55250344999997
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "3133ef8dc12b593aebdc6959df90f526ef6c90ae",
         "name" : "Acme Fresh Market No. 14",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/117062156605117309057/photos\"\u003eDanny Mitchell\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAH_OyTnn72eN9t1Z7OeYpseDqFAPtFnTZV4pqEdy4tDG9Afz4DxhW_vseRCVF8_sIb_Dkco5Rcciuu_j2n8ct-O9UmUJLHjnA6RqunBAfsXIeF8w5KA91oTtwLQDo6Xg7Jmm4wDWs6gJm5Q-KOQFots5ef6WHoBVtGGjXLEhLXvyEhAiadifw4BMjGUME18Gz6vbGhQ7hzmT03rk0g5igLBMMZG8ScL_jw",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJPeS146nVMIgR1_RxEYDGTnA",
         "rating" : 3.8,
         "reference" : "CnRrAAAA3QY0xOu22lpuOvmSz00gG9zaFDOnnGsT4KY0lgnL9O5EDtxXJ4BxwOO5E_5u9NmfWfZt4dIaU77_SA_dAXpfd-TPObvxDLvNIhQdlCJCJDTQ4f5sJlILLUBW03uEOgfrmgQnXQ_PXa1XBNDwPcne1BIQAiU6b8_2iiPknD7aE5CJUhoUxgkZhLZizOCQ12HNiADNA-w7Nck",
         "scope" : "GOOGLE",
         "types" : [
            "pharmacy",
            "bakery",
            "liquor_store",
            "grocery_or_supermarket",
            "health",
            "food",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "3235 Manchester Road, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.11432260000001,
               "lng" : -81.46977339999999
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "56c400fe116e93a4ba1d12d29109333b9f3ba05c",
         "name" : "JCPenney Optical",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 250,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/109231773739838417561/photos\"\u003eJCPenney Optical\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAHSY2ZK4ZhvLJcdjVFovEKlrMk__mMJAJlyzuLK7m-U3gvhJIucUIGuHNXonMp_aTrDf825VDUrD4TnmD5otpMqK7U11ccNoS1zSBhdTVMsMz60Rsswhca9bk_YQusNrBu-rUD7AbYpyv6myeNRmRZSJ__LlE47cFjjOBXPywxTNEhBSF9yUrD63McvCWZwPCJjvGhTCl2JZtWClkyTAP3PABx9qNtTiGw",
               "width" : 250
            }
         ],
         "place_id" : "ChIJ8THMzY4oMYgRdA-HGgaKnks",
         "reference" : "CnRjAAAAyFQtrjD3JEFYoDtsu9Beek09BNj61ulX6o9otFx9KhtJhjdm8JBCEEXs1cNmwdZIERwnKKkkSei40Q_yV0rjoNzyIeSBwdgOopNuux348SYOwwg2GRgYNMWuJS2uNwRJb8br0NlE4VQXyzggO9whXRIQKCOkN6Qzm5QZU6E5jATG2RoUL7258UScxFxbmgRSRGyHAnpxzSE",
         "scope" : "GOOGLE",
         "types" : [ "health", "store", "point_of_interest", "establishment" ],
         "vicinity" : "2000 Brittain Road, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1209205,
               "lng" : -81.4770781
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "47de9ddf33a69d21260288e3984e527103af7ad6",
         "name" : "Target",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1265,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/105519478033294030174/photos\"\u003eDavid Johnson\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAADWu4praKg_NJzGTF2dUrsFLfGUtJaYvRATezwt2r2u71SA0kZjktbkSfawqHamJuC3er8iZqHMXKjO4yeYD_TmLM1i0peMUYUGNoC82aql4uu-KG8u3uyKZBDc7_W6PP4V6TrCxnFv0BL0ngSj8C_1XKWyXw5rp_PkxuKRUJvCfEhDY197sy1ywyKUjp3Tr0_GBGhSxpcvNzaroEUwxRBJEQFK2a3ZDIg",
               "width" : 949
            }
         ],
         "place_id" : "ChIJ4yprBHwoMYgRH8i8pVsr_wg",
         "price_level" : 2,
         "rating" : 4,
         "reference" : "CmRZAAAA6o3e6gxYSoYcVrhfN3ucFj87GREaaGFQWKSFbR9eZlyThjiOsqRzoQ1jqw6oeCexhQJ3McBm2znzr6Ci6xFUNDX8OQ8Tha7byI4pv55zrPOUhhT7NWhH-CZCqYzPyUK2EhDULWFZBIWGJzWsuUa28NwbGhSP4E77_mYNxiYI2tdtXhg1KJrFHQ",
         "scope" : "GOOGLE",
         "types" : [
            "department_store",
            "electronics_store",
            "clothing_store",
            "furniture_store",
            "home_goods_store",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "449 Howe Ave, Cuyahoga Falls"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.04783800000001,
               "lng" : -81.44221779999999
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "c094a7e9bad59dd9c7229bdfedce36fc7ab82807",
         "name" : "Acme Fresh Market No. 2",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 259,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106919065830904678061/photos\"\u003eAcme Fresh Market No. 2\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAFtXgZcVRcvej9StohW94099w3UA-WYMxtbv1zQWmurbj2oSmO6W4IZ1X6aVXJXZb92DYVLd2rVejBZE6M2TwLXpys1stC3PsGhi3JRc6cqXz5_AXMim574gvNkgzOSr3AVYc4V5UPSoiJxnOchBgOZn_Wvgf3GDIE9Dg4ipPxSREhDUIp9HYFSRqm2hK3uaUVMwGhQxdSHmD3Jnb9NJFf1y9r5Nz0RA8w",
               "width" : 259
            }
         ],
         "place_id" : "ChIJz5EBnVkpMYgR9HdTNCgLFw8",
         "rating" : 4.1,
         "reference" : "CnRqAAAAu5JSHnw14arMgffxPkw1LbcJrmOeE6phc0anwE-WRjG8wYENseA5wsFXou3MvOddyFlB590ZTf3pzkDpjpWMEXEClMTaJkdLR03-5RrkTtwNzbAhUSDAYDUaMdAeCXf7U811Et_hjZNr3H3PYiLflRIQ6OsoRWlqTrXUZUpGnXvGbhoUS9FiC5q3ckttTNud-5w1-XOm4OY",
         "scope" : "GOOGLE",
         "types" : [
            "grocery_or_supermarket",
            "pharmacy",
            "bakery",
            "liquor_store",
            "health",
            "food",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "2420 Wedgewood Drive, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1188001,
               "lng" : -81.4720676
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11910789999999,
                  "lng" : -81.4719963
               },
               "southwest" : {
                  "lat" : 41.11869750000001,
                  "lng" : -81.47228149999998
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "cac151fae72cf4f050eba0db06966c4b3e0a1a2f",
         "name" : "AT&T",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 700,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/117020446230434799719/photos\"\u003eAT&amp;T\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAHQS62iBz45dJnAdjMi7VxPjNgAddwybep8nVmH5YxO488YFCRIyVII7WplRBIrxp11FKVB_zMAvncHPzv-TdYZWfHy5P4f0mfPmUj6PxOAGXxTCQf7A6f_d9sZAzvbyn5gA5P2ZZXekUm3UgNq3F3emsnKzaI3S1vrwFsnpRSJOEhD474jDgullb5giFVxoFh_5GhTgQpDsfJQF8dJcA8vKsnZTazsdPw",
               "width" : 700
            }
         ],
         "place_id" : "ChIJ4z5Sin0oMYgRbiLjaI1FDP8",
         "price_level" : 2,
         "rating" : 3,
         "reference" : "CmRYAAAATBh78kQsicSTDwYRFUgonicoc6L2WwDC7FLTmy2SyrLbsTixscNTebsJtjsuRv6jhiheFkOwlqJ-2prGDka1mrTOa_SWkFCddGXcZ397lL3xZ5UbkN9WQOb6YawhrV6nEhCiZEHnV3nAEtqd9aCcjtXNGhTfnrQbpitDw3j39g2F1NilA3ntyA",
         "scope" : "GOOGLE",
         "types" : [ "electronics_store", "store", "point_of_interest", "establishment" ],
         "vicinity" : "794 Howe Avenue, Cuyahoga Falls"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.13542749999999,
               "lng" : -81.6389741
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.13607460000001,
                  "lng" : -81.63896150000001
               },
               "southwest" : {
                  "lat" : 41.13521179999999,
                  "lng" : -81.63897829999999
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "9a1ddb8f59122c0ad3cac085ead43451a75150fd",
         "name" : "Jared The Galleria of Jewelry",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 600,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/115967409550032239797/photos\"\u003eJared The Galleria of Jewelry\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAEJAOvBRWBEIq6URWHggrSUHps3Q_X89Xw9p3kBw4cD0iyDwC1oN-pdLl_oi1kYucqlFyVsxoI9IzkXoa3i4MRp2Rt4e8syLGVZBu_ky6rwMUD2eH3nKH2GRjZjDQ8gAld_AgPLybg_zL_pwlvnEV_aiy0n5mSN3SSVgYZluIeHVEhA6h9tVVeErCOn38O6hnTJUGhSP8uvuytONG7T_BxmBmaU1GqSXUg",
               "width" : 720
            }
         ],
         "place_id" : "ChIJwQts24LQMIgRrfYfgPsnDS8",
         "price_level" : 3,
         "rating" : 4.2,
         "reference" : "CnRwAAAACquMBCBTtxWR1S6e6zes5m_fVHTf4Rp45DFtGvVmnxdz7Cazw8v0FzliOL8jvIsZXEQDCQqzuZlhnBp1Z3Rh-Cmim51-AGC41c9mwfCnwRX37-kB5wrtUgoeVgCK1MXDpzqJ5cUn6tcSOn5aF_AMchIQE301HGbhi0CZG1Ci8RyjxRoU1eFVajZLhYprusu8cwZEFgSSbzo",
         "scope" : "GOOGLE",
         "types" : [ "jewelry_store", "store", "point_of_interest", "establishment" ],
         "vicinity" : "3900 Medina Road, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.1156832,
               "lng" : -81.46818669999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.11573745,
                  "lng" : -81.46479894999999
               },
               "southwest" : {
                  "lat" : 41.11552045,
                  "lng" : -81.46931595
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "cc74e94dd5387e1062b8bef4d6b0ad7a37d23f0b",
         "name" : "Foot Locker",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJtcs60IUoMYgRnJ3oVxxh_aQ",
         "price_level" : 2,
         "reference" : "CmRfAAAAqd0_2yvIMiiTBjhGuYcp0OfU--0_cCv0DTz_JcKQ904-5jdQMh81Mq6zFxBaGnX-I2io6MlPHVgrKrvB5uBohxdrZQQbgZ-EQzLncqznqJDpkEmhAIzAYVE8uHa76_DwEhDGgI37U7n25IYsnDIq0QJuGhTIpPx5X-RxfV23eUqwP9FBoJeBeA",
         "scope" : "GOOGLE",
         "types" : [
            "shoe_store",
            "clothing_store",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "2000 Brittain Road #400, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.13267810000001,
               "lng" : -81.6501545
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.13293115,
                  "lng" : -81.64746980000001
               },
               "southwest" : {
                  "lat" : 41.13191894999999,
                  "lng" : -81.65104940000001
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "573625feca0dd9782e40727b63b58733c91884f0",
         "name" : "Best Buy",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2961,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/105115001006349051560/photos\"\u003eKen Azar\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAKmr_NRJYmK4SYL7N5VWFRFhQFOZwIsQ2vtmxLZ7TBcw2x5SqddI_cybV0tjxbZOOS5OG4B6U9t9ZX1GGfVPXVFaeldZwzl6N6ialNKGjdaCZJzBLdMllxnTNJPHIAOH_85H4O5Z7kShgkGbbtOX8nMj-MQhbbLaFUPmLW3j1IdjEhDMv9aWnxlF4zU_vXv8QfTEGhSSBRhj8do5NvKM0M8rhewXjFqPKQ",
               "width" : 3948
            }
         ],
         "place_id" : "ChIJlTAwzH3QMIgRWJYPZGrXcnI",
         "price_level" : 2,
         "rating" : 3.7,
         "reference" : "CmRbAAAA_ErbfcMKlKzVfh41nWA_xCpXKsW5bIuDZ_24qTpB2xLi1kR9Fk1lyzhEIQM_x_jVq2wOp7VxaG-cwwf1Rd_BPRGb8aOiNak4u_KBUYM3cVvqp9wBB7ln7QxJIEczr1PpEhD6sqCE6TSyVy7ylaTOU19bGhRNrAFMuXw55XdEFtJzd5Bk_3xnVg",
         "scope" : "GOOGLE",
         "types" : [
            "electronics_store",
            "home_goods_store",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "96 Rothrock Road, Akron"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 41.0850624,
               "lng" : -81.5347689
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.08512614999999,
                  "lng" : -81.53475170000002
               },
               "southwest" : {
                  "lat" : 41.08487115000001,
                  "lng" : -81.53482049999998
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "9e916e257f3883c3faeb9207ba8582687e191bd0",
         "name" : "Krispy Kreme",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 495,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/118443604894937197047/photos\"\u003eKrispy Kreme\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAMTPUSg4Cs13KpiBOS9QINNnsSGLwYOXGx6ShgS18H4wUXDEgtKrxPgkF5kvvzvqFZewPNQ9mn63BcxpBFKA6x1P-PXCWkeKjhum_SToUveZqPenGq-45JxrJBteTrs2e4JUGn7n5gqmypK_dr-01XDn9ZXhHgERvMzT3pWTB9p5EhAuFWuvKuA0APh3lFRckY5wGhR67CVMViet3St7HkSDlLXnCzVHgQ",
               "width" : 495
            }
         ],
         "place_id" : "ChIJjxFkgDbWMIgRkIQV5ZbwOeI",
         "price_level" : 1,
         "rating" : 4.6,
         "reference" : "CmRgAAAAga7ECxseF3uBez5ssF2JMU7aRe_MLZH2nePTF_Bjdg4hXjnA0tB2RaXKFtLZ-AmcZto5wdqu82OXHg1Vf31wtTZpzBgz35k1ZsaeJ4z1bwfiiw9JElTvTFMoux1A9Ch6EhBTN0kVki4e3Wqm4BCv0hv3GhSGCq1dymOQjzUMee3-IJtI67SR0A",
         "scope" : "GOOGLE",
         "types" : [
            "bakery",
            "cafe",
            "food",
            "store",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "354 S Maple St, Akron"
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

    getObject(db, col, val){
        let data = JSON.stringify({
            db_host: 'flypapermagazine.com',
            db_username: 'flypaper_scmgr',
            db_name: 'flypaper_scdb',
            db_password: 'maxwel123',
            query: 'get '+db+' '+col+' '+val+' spec',
            all: false
        });
        return this.http.post('http://dsykes.esy.es/php/adb/adb.php', data).map(res => res.json());
    }

    plrWatcher(){
        setInterval( () => {
            console.log('Set');
        })
    }
}