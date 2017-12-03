import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { SocialPage } from "../social/social";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  rowData: object;
  anomaliesData : Array<Array<object>>;
  anomaliesTrack : number;
  pushEvent: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.pushEvent = SocialPage;
    this.rowData = {"_body":null};
    this.anomaliesData = [[
        {
            "time": "1",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "2",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "3",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "4",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "5",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "6",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "7",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "8",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "9",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "10",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "11",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "12",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "13",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "14",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "15",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "16",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "17",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "18",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "19",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "20",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "21",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "22",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "23",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "24",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "25",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "26",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "27",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "28",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "29",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "30",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "31",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "32",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "33",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "34",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "35",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "36",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "37",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "38",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "39",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "40",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "41",
            "steps": "41",
            "anomalies": "0"
        },
        {
            "time": "42",
            "steps": "36",
            "anomalies": "0"
        },
        {
            "time": "43",
            "steps": "53",
            "anomalies": "0"
        },
        {
            "time": "44",
            "steps": "54",
            "anomalies": "0"
        },
        {
            "time": "45",
            "steps": "54",
            "anomalies": "0"
        },
        {
            "time": "46",
            "steps": "25",
            "anomalies": "0"
        },
        {
            "time": "47",
            "steps": "30",
            "anomalies": "0"
        },
        {
            "time": "48",
            "steps": "48",
            "anomalies": "0"
        },
        {
            "time": "49",
            "steps": "53",
            "anomalies": "0"
        },
        {
            "time": "50",
            "steps": "26",
            "anomalies": "0"
        },
        {
            "time": "51",
            "steps": "42",
            "anomalies": "0"
        },
        {
            "time": "52",
            "steps": "38",
            "anomalies": "0"
        },
        {
            "time": "53",
            "steps": "56",
            "anomalies": "0"
        },
        {
            "time": "54",
            "steps": "31",
            "anomalies": "0"
        },
        {
            "time": "55",
            "steps": "41",
            "anomalies": "0"
        },
        {
            "time": "56",
            "steps": "36",
            "anomalies": "0"
        },
        {
            "time": "57",
            "steps": "40",
            "anomalies": "0"
        },
        {
            "time": "58",
            "steps": "45",
            "anomalies": "0"
        },
        {
            "time": "59",
            "steps": "31",
            "anomalies": "0"
        },
        {
            "time": "60",
            "steps": "53",
            "anomalies": "0"
        },
        {
            "time": "61",
            "steps": "29",
            "anomalies": "0"
        },
        {
            "time": "62",
            "steps": "40",
            "anomalies": "0"
        },
        {
            "time": "63",
            "steps": "34",
            "anomalies": "0"
        },
        {
            "time": "64",
            "steps": "49",
            "anomalies": "0"
        },
        {
            "time": "65",
            "steps": "36",
            "anomalies": "0"
        },
        {
            "time": "66",
            "steps": "56",
            "anomalies": "0"
        },
        {
            "time": "67",
            "steps": "25",
            "anomalies": "0"
        },
        {
            "time": "68",
            "steps": "30",
            "anomalies": "0"
        },
        {
            "time": "69",
            "steps": "45",
            "anomalies": "0"
        },
        {
            "time": "70",
            "steps": "22",
            "anomalies": "0"
        },
        {
            "time": "71",
            "steps": "53",
            "anomalies": "0"
        },
        {
            "time": "72",
            "steps": "60",
            "anomalies": "0"
        },
        {
            "time": "73",
            "steps": "40",
            "anomalies": "0"
        },
        {
            "time": "74",
            "steps": "28",
            "anomalies": "0"
        },
        {
            "time": "75",
            "steps": "29",
            "anomalies": "0"
        },
        {
            "time": "76",
            "steps": "44",
            "anomalies": "0"
        },
        {
            "time": "77",
            "steps": "55",
            "anomalies": "0"
        },
        {
            "time": "78",
            "steps": "50",
            "anomalies": "0"
        },
        {
            "time": "79",
            "steps": "26",
            "anomalies": "0"
        },
        {
            "time": "80",
            "steps": "32",
            "anomalies": "0"
        },
        {
            "time": "81",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "82",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "83",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "84",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "85",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "86",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "87",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "88",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "89",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "90",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "91",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "92",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "93",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "94",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "95",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "96",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "97",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "98",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "99",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "100",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "101",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "102",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "103",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "104",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "105",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "106",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "107",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "108",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "109",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "110",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "111",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "112",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "113",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "114",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "115",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "116",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "117",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "118",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "119",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "120",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "121",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "122",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "123",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "124",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "125",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "126",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "127",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "128",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "129",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "130",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "131",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "132",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "133",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "134",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "135",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "136",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "137",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "138",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "139",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "140",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "141",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "142",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "143",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "144",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "145",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "146",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "147",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "148",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "149",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "150",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "151",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "152",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "153",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "154",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "155",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "156",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "157",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "158",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "159",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "160",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "161",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "162",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "163",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "164",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "165",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "166",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "167",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "168",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "169",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "170",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "171",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "172",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "173",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "174",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "175",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "176",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "177",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "178",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "179",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "180",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "181",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "182",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "183",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "184",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "185",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "186",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "187",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "188",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "189",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "190",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "191",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "192",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "193",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "194",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "195",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "196",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "197",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "198",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "199",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "200",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "201",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "202",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "203",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "204",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "205",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "206",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "207",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "208",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "209",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "210",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "211",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "212",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "213",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "214",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "215",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "216",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "217",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "218",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "219",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "220",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "221",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "222",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "223",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "224",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "225",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "226",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "227",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "228",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "229",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "230",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "231",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "232",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "233",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "234",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "235",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "236",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "237",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "238",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "239",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "240",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "241",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "242",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "243",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "244",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "245",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "246",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "247",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "248",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "249",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "250",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "251",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "252",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "253",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "254",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "255",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "256",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "257",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "258",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "259",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "260",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "261",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "262",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "263",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "264",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "265",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "266",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "267",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "268",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "269",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "270",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "271",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "272",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "273",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "274",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "275",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "276",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "277",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "278",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "279",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "280",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "281",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "282",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "283",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "284",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "285",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "286",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "287",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "288",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "289",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "290",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "291",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "292",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "293",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "294",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "295",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "296",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "297",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "298",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "299",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "300",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "301",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "302",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "303",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "304",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "305",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "306",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "307",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "308",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "309",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "310",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "311",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "312",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "313",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "314",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "315",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "316",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "317",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "318",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "319",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "320",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "321",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "322",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "323",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "324",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "325",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "326",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "327",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "328",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "329",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "330",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "331",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "332",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "333",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "334",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "335",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "336",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "337",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "338",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "339",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "340",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "341",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "342",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "343",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "344",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "345",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "346",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "347",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "348",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "349",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "350",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "351",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "352",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "353",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "354",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "355",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "356",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "357",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "358",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "359",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "360",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "361",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "362",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "363",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "364",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "365",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "366",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "367",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "368",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "369",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "370",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "371",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "372",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "373",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "374",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "375",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "376",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "377",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "378",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "379",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "380",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "381",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "382",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "383",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "384",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "385",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "386",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "387",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "388",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "389",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "390",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "391",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "392",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "393",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "394",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "395",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "396",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "397",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "398",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "399",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "400",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "401",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "402",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "403",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "404",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "405",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "406",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "407",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "408",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "409",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "410",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "411",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "412",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "413",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "414",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "415",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "416",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "417",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "418",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "419",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "420",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "421",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "422",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "423",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "424",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "425",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "426",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "427",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "428",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "429",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "430",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "431",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "432",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "433",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "434",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "435",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "436",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "437",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "438",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "439",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "440",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "441",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "442",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "443",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "444",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "445",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "446",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "447",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "448",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "449",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "450",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "451",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "452",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "453",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "454",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "455",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "456",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "457",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "458",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "459",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "460",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "461",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "462",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "463",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "464",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "465",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "466",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "467",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "468",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "469",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "470",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "471",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "472",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "473",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "474",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "475",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "476",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "477",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "478",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "479",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "480",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "481",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "482",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "483",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "484",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "485",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "486",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "487",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "488",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "489",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "490",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "491",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "492",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "493",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "494",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "495",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "496",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "497",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "498",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "499",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "500",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "501",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "502",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "503",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "504",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "505",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "506",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "507",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "508",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "509",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "510",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "511",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "512",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "513",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "514",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "515",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "516",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "517",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "518",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "519",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "520",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "521",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "522",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "523",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "524",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "525",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "526",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "527",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "528",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "529",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "530",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "531",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "532",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "533",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "534",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "535",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "536",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "537",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "538",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "539",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "540",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "541",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "542",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "543",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "544",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "545",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "546",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "547",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "548",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "549",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "550",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "551",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "552",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "553",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "554",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "555",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "556",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "557",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "558",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "559",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "560",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "561",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "562",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "563",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "564",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "565",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "566",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "567",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "568",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "569",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "570",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "571",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "572",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "573",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "574",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "575",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "576",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "577",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "578",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "579",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "580",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "581",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "582",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "583",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "584",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "585",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "586",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "587",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "588",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "589",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "590",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "591",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "592",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "593",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "594",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "595",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "596",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "597",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "598",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "599",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "600",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "601",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "602",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "603",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "604",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "605",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "606",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "607",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "608",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "609",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "610",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "611",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "612",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "613",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "614",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "615",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "616",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "617",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "618",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "619",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "620",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "621",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "622",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "623",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "624",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "625",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "626",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "627",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "628",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "629",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "630",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "631",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "632",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "633",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "634",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "635",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "636",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "637",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "638",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "639",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "640",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "641",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "642",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "643",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "644",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "645",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "646",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "647",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "648",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "649",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "650",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "651",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "652",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "653",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "654",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "655",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "656",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "657",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "658",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "659",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "660",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "661",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "662",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "663",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "664",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "665",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "666",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "667",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "668",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "669",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "670",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "671",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "672",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "673",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "674",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "675",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "676",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "677",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "678",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "679",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "680",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "681",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "682",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "683",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "684",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "685",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "686",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "687",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "688",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "689",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "690",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "691",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "692",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "693",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "694",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "695",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "696",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "697",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "698",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "699",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "700",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "701",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "702",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "703",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "704",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "705",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "706",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "707",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "708",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "709",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "710",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "711",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "712",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "713",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "714",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "715",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "716",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "717",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "718",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "719",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "720",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "721",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "722",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "723",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "724",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "725",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "726",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "727",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "728",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "729",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "730",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "731",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "732",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "733",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "734",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "735",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "736",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "737",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "738",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "739",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "740",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "741",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "742",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "743",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "744",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "745",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "746",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "747",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "748",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "749",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "750",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "751",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "752",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "753",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "754",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "755",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "756",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "757",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "758",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "759",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "760",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "761",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "762",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "763",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "764",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "765",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "766",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "767",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "768",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "769",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "770",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "771",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "772",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "773",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "774",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "775",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "776",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "777",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "778",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "779",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "780",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "781",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "782",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "783",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "784",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "785",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "786",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "787",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "788",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "789",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "790",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "791",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "792",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "793",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "794",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "795",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "796",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "797",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "798",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "799",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "800",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "801",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "802",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "803",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "804",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "805",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "806",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "807",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "808",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "809",
            "steps": "16",
            "anomalies": "1"
        },
        {
            "time": "810",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "811",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "812",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "813",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "814",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "815",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "816",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "817",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "818",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "819",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "820",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "821",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "822",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "823",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "824",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "825",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "826",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "827",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "828",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "829",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "830",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "831",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "832",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "833",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "834",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "835",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "836",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "837",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "838",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "839",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "840",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "841",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "842",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "843",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "844",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "845",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "846",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "847",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "848",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "849",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "850",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "851",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "852",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "853",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "854",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "855",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "856",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "857",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "858",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "859",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "860",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "861",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "862",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "863",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "864",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "865",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "866",
            "steps": "38",
            "anomalies": "1"
        },
        {
            "time": "867",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "868",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "869",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "870",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "871",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "872",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "873",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "874",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "875",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "876",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "877",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "878",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "879",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "880",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "881",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "882",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "883",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "884",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "885",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "886",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "887",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "888",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "889",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "890",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "891",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "892",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "893",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "894",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "895",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "896",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "897",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "898",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "899",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "900",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "901",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "902",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "903",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "904",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "905",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "906",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "907",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "908",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "909",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "910",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "911",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "912",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "913",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "914",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "915",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "916",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "917",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "918",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "919",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "920",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "921",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "922",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "923",
            "steps": "17",
            "anomalies": "1"
        },
        {
            "time": "924",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "925",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "926",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "927",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "928",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "929",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "930",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "931",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "932",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "933",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "934",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "935",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "936",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "937",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "938",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "939",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "940",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "941",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "942",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "943",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "944",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "945",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "946",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "947",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "948",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "949",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "950",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "951",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "952",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "953",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "954",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "955",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "956",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "957",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "958",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "959",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "960",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "961",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "962",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "963",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "964",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "965",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "966",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "967",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "968",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "969",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "970",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "971",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "972",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "973",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "974",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "975",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "976",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "977",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "978",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "979",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "980",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "981",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "982",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "983",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "984",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "985",
            "steps": "36",
            "anomalies": "1"
        },
        {
            "time": "986",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "987",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "988",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "989",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "990",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "991",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "992",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "993",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "994",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "995",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "996",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "997",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "998",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "999",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1000",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1001",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1002",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1003",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1004",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1005",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1006",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1007",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1008",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1009",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1010",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1011",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1012",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1013",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1014",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1015",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1016",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1017",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1018",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1019",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1020",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1021",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1022",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1023",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1024",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1025",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1026",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1027",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1028",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1029",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1030",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1031",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1032",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1033",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1034",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1035",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1036",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1037",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1038",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1039",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1040",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1041",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1042",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1043",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1044",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1045",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1046",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1047",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1048",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1049",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1050",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1051",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1052",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1053",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1054",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1055",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1056",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1057",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1058",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1059",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1060",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1061",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1062",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1063",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1064",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1065",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1066",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1067",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1068",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1069",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1070",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1071",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1072",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1073",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1074",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1075",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1076",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1077",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1078",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1079",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1080",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1081",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1082",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1083",
            "steps": "30",
            "anomalies": "1"
        },
        {
            "time": "1084",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1085",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1086",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1087",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1088",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1089",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1090",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1091",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1092",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1093",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1094",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1095",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1096",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1097",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1098",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1099",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1100",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1101",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1102",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1103",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1104",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1105",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1106",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1107",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1108",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1109",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1110",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1111",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1112",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1113",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1114",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1115",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1116",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1117",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1118",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1119",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1120",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1121",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1122",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1123",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1124",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1125",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1126",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1127",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1128",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1129",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1130",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1131",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1132",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1133",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1134",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1135",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1136",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1137",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1138",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1139",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1140",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1141",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1142",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1143",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1144",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1145",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1146",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1147",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1148",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1149",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1150",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1151",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1152",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1153",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1154",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1155",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1156",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1157",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1158",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1159",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1160",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1161",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1162",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1163",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1164",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1165",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1166",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1167",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1168",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1169",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1170",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1171",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1172",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1173",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1174",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1175",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1176",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1177",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1178",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1179",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1180",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1181",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1182",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1183",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1184",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1185",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1186",
            "steps": "39",
            "anomalies": "1"
        },
        {
            "time": "1187",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1188",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1189",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1190",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1191",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1192",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1193",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1194",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1195",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1196",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1197",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1198",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1199",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1200",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1201",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1202",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1203",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1204",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1205",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1206",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1207",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1208",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1209",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1210",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1211",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1212",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1213",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1214",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1215",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1216",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1217",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1218",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1219",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1220",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1221",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1222",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1223",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1224",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1225",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1226",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1227",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1228",
            "steps": "4",
            "anomalies": "0"
        },
        {
            "time": "1229",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1230",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1231",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1232",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1233",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1234",
            "steps": "1",
            "anomalies": "0"
        },
        {
            "time": "1235",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1236",
            "steps": "3",
            "anomalies": "0"
        },
        {
            "time": "1237",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1238",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1239",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1240",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1241",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1242",
            "steps": "5",
            "anomalies": "0"
        },
        {
            "time": "1243",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1244",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1245",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1246",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1247",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1248",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1249",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1250",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1251",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1252",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1253",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1254",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1255",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1256",
            "steps": "2",
            "anomalies": "0"
        },
        {
            "time": "1257",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1258",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1259",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1260",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1261",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1262",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1263",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1264",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1265",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1266",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1267",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1268",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1269",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1270",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1271",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1272",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1273",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1274",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1275",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1276",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1277",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1278",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1279",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1280",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1281",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1282",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1283",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1284",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1285",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1286",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1287",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1288",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1289",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1290",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1291",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1292",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1293",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1294",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1295",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1296",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1297",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1298",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1299",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1300",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1301",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1302",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1303",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1304",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1305",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1306",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1307",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1308",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1309",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1310",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1311",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1312",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1313",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1314",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1315",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1316",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1317",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1318",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1319",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1320",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1321",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1322",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1323",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1324",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1325",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1326",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1327",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1328",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1329",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1330",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1331",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1332",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1333",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1334",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1335",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1336",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1337",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1338",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1339",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1340",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1341",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1342",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1343",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1344",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1345",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1346",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1347",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1348",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1349",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1350",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1351",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1352",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1353",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1354",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1355",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1356",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1357",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1358",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1359",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1360",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1361",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1362",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1363",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1364",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1365",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1366",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1367",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1368",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1369",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1370",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1371",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1372",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1373",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1374",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1375",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1376",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1377",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1378",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1379",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1380",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1381",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1382",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1383",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1384",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1385",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1386",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1387",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1388",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1389",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1390",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1391",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1392",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1393",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1394",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1395",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1396",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1397",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1398",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1399",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1400",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1401",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1402",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1403",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1404",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1405",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1406",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1407",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1408",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1409",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1410",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1411",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1412",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1413",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1414",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1415",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1416",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1417",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1418",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1419",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1420",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1421",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1422",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1423",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1424",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1425",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1426",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1427",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1428",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1429",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1430",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1431",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1432",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1433",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1434",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1435",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1436",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1437",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1438",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1439",
            "steps": "0",
            "anomalies": "0"
        },
        {
            "time": "1440",
            "steps": "0",
            "anomalies": "0"
        }
    ]];
    this.anomaliesTrack = 0;
  }

  ionViewDidLoad() {

     let headers = new Headers();
     headers.append('X-Parse-Application-Id', 'gY6FfcNCmyYOgiTIefBqzTUWDsJKEQkJkUOsQLTk');
     headers.append('X-Parse-REST-API-Key', '9EFmCGbWbvxhToueN3qDlmET6MFtk3IN0UTIxsdL');
     
     let body = {
       "step":15
     }
 
     this.http.post('https://parseapi.back4app.com/classes/Health', JSON.stringify(body), {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           console.log("POST data to Back4App: Success");
         });

    
     let headers2 = new Headers();
     headers2.append('X-Parse-Application-Id', 'gY6FfcNCmyYOgiTIefBqzTUWDsJKEQkJkUOsQLTk');
     headers2.append('X-Parse-REST-API-Key', '9EFmCGbWbvxhToueN3qDlmET6MFtk3IN0UTIxsdL');
    
     this.http.get('https://parseapi.back4app.com/classes/Health', {headers: headers2})
         .subscribe(data=>{
           this.rowData = data
           this.rowData = JSON.parse(this.rowData["_body"])["results"];
           console.log(this.rowData[0]);
         });


    console.log(this.anomaliesData);
    for (let e of this.anomaliesData[0]){
      console.log(e["anomalies"]);
      if (e["anomalies"]==="1"){
        this.anomaliesTrack += 1;
      }
      if (this.anomaliesTrack === 10){
        this.anomaliesTrack = 0;
        console.log("Warning");
      }
     }
      
    }

}
