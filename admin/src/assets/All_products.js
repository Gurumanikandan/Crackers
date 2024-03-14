import svnShot from './7_shot.jpg'
import ttShot from './30_shot.jpg'
import tsnd_wala from './1000_wala.jpg'
import twotsnd_wala from './2000_wala.jpg'
import sony_shower from './arctic-showers-sony.jpg'
import biji from './biji.jpg'
import bijili from './bijili.png'
import carnival from './carnival.jpg'
import chakkra1 from './chakkra1.jpg'
import chakkra2 from './chakkra2.jpg'
import comboSky from './combo_sky.jpg'
import discount from './discount.jpg'
import falling from './falling-rain-shots-sony.jpg'
import flower from './flower_pot.jpeg'
import flower1 from './flower_pot1.jpg'
import g1 from './gift_box.png'
import g2 from './gift_box2.jpg'
import g3 from './gift_box3.jpeg'
import g5 from './gift_box5.jpeg'
import gSky from './golden-sky-sony.jpg'
import mini from './mini_sky.jpg'
import parrot from './parrot.jpg'
import pencil from './pencil.jpg'
import mb from './mini_bullet.jpg'
import g4 from './gift4.jpg'
import g6 from './gift6.jpg'
import mst from './magic_star.jpg'
import hl from './lakshmi huge.jpg'
import sl from './lakshmi small.jpg'
import ms from './musical_siren.jpg'
import mss from './mini_siren.jpg'
import mp from './mega_peacock.jpg'
import sp1 from './crackling_50cm.jpg'
import sp2 from './Electric_50cm.jpg'
import gun from './gun.jpg'
import cm from './color_matches.jpg'
import es from './Electric_sparkle_5.jpg'
import hb from './hydro_bomb.jpg'
import Ab from './Atom_bomb.jpg'
import tb from './timing_bomb.jpg'
import thb from './Thunder_bomb.jpg'
import meb from './mega_bullet.jpg'
import bb from './Bullet_bomb.jpg'
import stb from './storm_bomb.jpg'
import cb from './color_bomb.jpg'

const All_products = [
    {
        id: 1,
        name: 'Mini SkyShot',
        image: mini,
        price_value: 2000,
        category: "Night_cracker",
    },
    {
        id: 2,
        name: 'Two Thousand Wala',
        image: ttShot,
        price_value: 7000,
        category: "Day_cracker",
    },
    {
        id: 3,
        name: "falling rain shot",
        image: falling,
        price_value: 4000,
        category: "Night_cracker",
    },
    {
        id: 4,
        name: "Golden Skyshot",
        image: gSky,
        price_value: 5000,
        category: "Night_cracker",
    },
    {
        id: 5,
        name: "Combo Skyshot",
        image: comboSky,
        price_value: 8000,
        category: "Night_cracker",
    },
    {
        id: 6,
        name: "huge Two Thousand Wala",
        image: twotsnd_wala,
        price_value: 4000,
        category: "Day_cracker",
    },
    {
        id: 7,
        name: "one Thousand Wala",
        image: tsnd_wala,
        price_value: 2500,
        category: "Day_cracker",
    },
    {
        id: 8,
        name: "Carnival Cracker",
        image: carnival,
        price_value: 5000,
        category: "Night_cracker",
    },
    {
        id: 9,
        name: "Gift Box Small",
        image: g1,
        price_value: 6000,
        category: "Crackers_collections",
    },
    {
        id: 10,
        name: "Gift Box medium",
        image: g2,
        price_value: 7000,
        category: "Crackers_collections",
    },
    {
        id: 11,
        name: "Gift Box Huge",
        image: g3,
        price_value: 8000,
        category: "Crackers_collections",
    },
    {
        id: 12,
        name: "Gift Box ExtraLarge",
        image: g5,
        price_value: 1000,
        category: "Crackers_collections",
    },
    {
        id: 13,
        name: "Seven Shot",
        image: svnShot,
        price_value: 1000,
        category: "Night_cracker",
    },
    {
        id: 14,
        name: "Sony Shower Crackers",
        image: sony_shower,
        price_value: 1200,
        category: "Night_cracker",
    },
    {
        id: 15,
        name: "bijili",
        image: bijili,
        price_value: 100,
        category: "Day_cracker"
    },
    {
        id: 16,
        name: "bijili1",
        image: biji,
        price_value: 50,
        category: "Day_cracker",
    },
    {
        id: 17,
        name: "chakkra small",
        image: chakkra1,
        price_value: 230,
        category: "Night_cracker",
    },
    {
        id: 18,
        name: "Chakkra Huge",
        image: chakkra2,
        price_value: 400,
        category: "Night_cracker",
    },
    {
        id: 19,
        name: "Discount offer",
        image: discount,
        price_value: 100,
        category: "Discount Offer",
    },
    {
        id: 20,
        name: "flower pot small",
        image: flower,
        price_value: 350,
        category: "Night_cracker"
    },
    {
        id: 21,
        name: "flower pot Huge",
        image: flower1,
        price_value: 400,
        category: "Night_cracker",
    },
    {
        id: 22,
        name: "Pencil sparkle",
        image: pencil,
        price_value: 250,
        category: "Night_cracker",
    },
    {
        id: 23,
        name: "Parrot Huge",
        image: parrot,
        price_value: 50,
        category: "Day_cracker"
    },
    {
        id: 24,
        name: "Gift Box Huge",
        image: g4,
        price_value: 3000,
        category: "Crackers_collections",
    },
    {
        id: 25,
        name: "Gift Box extra large",
        image: g6,
        price_value: 5000,
        category: "Crackers_collections",
    },
    {
        id: 26,
        name: "Mega star",
        image: mst,
        price_value: 1500,
        category: "Night_cracker",
    },
    {
        id: 27,
        name: "Musical siren",
        image: ms,
        price_value: 1000,
        category: "Night_cracker",
    },
    {
        id: 28,
        name: "mini siren",
        image: mss,
        price_value: 500,
        category: "Night_cracker",
    },
    {
        id: 29,
        name: "Mega peacock",
        image: mp,
        price_value: 400,
        category: "Night_cracker",
    },
    {
        id: 30,
        name: "Gun",
        image: gun,
        price_value: 100,
        category: "Night_cracker",
    },
    {
        id: 31,
        name: "50cm crackling sprakles",
        image: sp1,
        price_value: 150,
        category: "Night_cracker",
    },
    {
        id: 32,
        name: "50cm Electric sparkles",
        image: sp2,
        price_value: 200,
        category: "Night_cracker",
    },
    {
        id: 33,
        name: "Huge laxmibomb",
        image: hl,
        price_value: 70,
        category: "Day_cracker",
    },
    {
        id: 34,
        name: "small laxmibomb",
        image: sl,
        price_value: 50,
        category: "Day_cracker",
    },
    {
        id: 35,
        name: "Mini Bullet",
        image: mb,
        price_value: 50,
        category: "Day_cracker",
    },
    {
        id: 36,
        name: "color matches",
        image: cm,
        price_value: 70,
        category: "Night_cracker",
    },
    {
        id: 37,
        name: "Electric sparkles collection of 5",
        image: es,
        price_value: 250,
        category: "Night_cracker",
    },
    {
        id: 38,
        name: "Hydro Bomb",
        image: hb,
        price_value: 150,
        category: "Day_cracker",
    },
    {
        id: 39,
        name: "Atom Bomb",
        image: Ab,
        price_value: 100,
        category: "Day_cracker",
    },
    {
        id: 40,
        name: "Timing Bomb",
        image: tb,
        price_value: 120,
        category: "Day_cracker",
    },
    {
        id: 41,
        name: "Thunder Bomb",
        image: thb,
        price_value: 170,
        category: "Day_cracker",
    },
    {
        id: 42,
        name: "Mega Bullet",
        image: meb,
        price_value: 150,
        category: "Day_cracker",
    },
    {
        id: 43,
        name: "Bullet Bomb",
        image: bb,
        price_value: 150,
        category: "Day_cracker",
    },
    {
        id: 44,
        name: "Tracer Bomb",
        image: tb,
        price_value: 120,
        category: "Day_cracker",
    },
    {
        id: 45,
        name: "Storm Bomb",
        image: stb,
        price_value: 200,
        category: "Day_cracker",
    },
    {
        id: 46,
        name: "color Bomb",
        image: cb,
        price_value: 150,
        category: "Day_cracker",
    },


];

export default All_products;
