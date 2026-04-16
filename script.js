const stations = [
    // Ireland
    { name: "RTÉ Radio 1", country: "Ireland", region: "Europe", lat: 53.3498, lng: -6.2603, genre: "News/Talk", url: "http://icecast.rte.ie/radio1" },
    { name: "RTÉ 2FM", country: "Ireland", region: "Europe", lat: 53.3498, lng: -6.2603, genre: "Pop/Youth", url: "http://icecast.rte.ie/2fm" },
    { name: "RTÉ Lyric FM", country: "Ireland", region: "Europe", lat: 53.3498, lng: -6.2603, genre: "Klassik", url: "http://icecast.rte.ie/lyric" },
    { name: "Raidió na Gaeltachta", country: "Ireland", region: "Europe", lat: 53.3498, lng: -6.2603, genre: "Irish Language", url: "http://icecast.rte.ie/rnag" },

    // United Kingdom
    { name: "BBC World Service", country: "United Kingdom", region: "Europe", lat: 51.5074, lng: -0.1278, genre: "News", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },

    // Germany
    { name: "Rock Antenne", country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Rock", url: "https://stream.rockantenne.de/rockantenne/stream/mp3" },
    { name: "NDR 2", country: "Germany", region: "Europe", lat: 53.5753, lng: 10.0153, genre: "Pop", url: "https://icecast.ndr.de/ndr/ndr2/niedersachsen/mp3/128/stream.mp3" },
    { name: "NDR Kultur", country: "Germany", region: "Europe", lat: 53.5753, lng: 10.0153, genre: "Klassik", url: "https://icecast.ndr.de/ndr/ndrkultur/live/mp3/128/stream.mp3" },
    { name: "Bayern 1", country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Oldies/Pop", url: "https://dispatcher.rndfnk.com/br/br1/obb/mp3/mid" },
    { name: "Bayern 2", country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Kultur/Talk", url: "https://dispatcher.rndfnk.com/br/br2/live/mp3/mid" },
    { name: "BR3", country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Pop/Talk", url: "https://dispatcher.rndfnk.com/br/br3/live/mp3/low" },
    { name: "BR24", country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "News", url: "https://dispatcher.rndfnk.com/br/br24/live/mp3/mid" },
    { name: "WDR 1Live", country: "Germany", region: "Europe", lat: 50.9333, lng: 6.9500, genre: "Pop/Youth", url: "https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3" },
    { name: "WDR 2",       country: "Germany", region: "Europe", lat: 50.9333, lng: 6.9500,  genre: "Pop/Nachrichten", url: "https://wdr-wdr2-nachrichten.icecast.wdr.de/wdr/wdr2/nachrichten/mp3/128/stream.mp3" },

    // Germany — Deutschlandradio
    { name: "Deutschlandfunk",       country: "Germany", region: "Europe", lat: 50.9333, lng: 6.9500,  genre: "News/Talk",  url: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3" },
    { name: "Deutschlandfunk Kultur",country: "Germany", region: "Europe", lat: 50.9333, lng: 6.9500,  genre: "Kultur",     url: "https://st02.sslstream.dlf.de/dlf/02/128/mp3/stream.mp3" },
    { name: "Deutschlandfunk Nova",  country: "Germany", region: "Europe", lat: 50.9333, lng: 6.9500,  genre: "Wissen/Jung",url: "https://st03.sslstream.dlf.de/dlf/03/128/mp3/stream.mp3" },

    // Germany — SWR / MDR
    { name: "SWR3",       country: "Germany", region: "Europe", lat: 48.7758, lng: 9.1829,  genre: "Pop/Hits",  url: "https://swr-swr3-live.cast.addradio.de/swr/swr3/live/mp3/128/stream.mp3" },
    { name: "MDR Aktuell",country: "Germany", region: "Europe", lat: 51.3397, lng: 12.3731, genre: "Nachrichten",url: "http://avw.mdr.de/streams/284300-3_mp3_high.m3u" },

    // Germany — BR additional
    { name: "Bayern 3",  country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Pop/Talk",  url: "https://streams.br.de/bayern3_2.m3u" },
    { name: "BR-Klassik",country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Klassik",   url: "https://streams.br.de/br-klassik_2.m3u" },

    // Germany — Private
    { name: "Antenne Bayern", country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Pop/Hits",   url: "http://mp3channels.webradio.antenne.de/antenne" },
    { name: "Hit Radio FFH",  country: "Germany", region: "Europe", lat: 50.1109, lng: 8.6821,  genre: "Hits",       url: "http://mp3.ffh.de/radioffh/hqlivestream.mp3" },
    { name: "Radio Bob",      country: "Germany", region: "Europe", lat: 51.3127, lng: 9.4797,  genre: "Rock",       url: "http://bob.hoerradar.de/radiobob-live-mp3-hq" },
    { name: "Rock Antenne DE",country: "Germany", region: "Europe", lat: 48.1351, lng: 11.5820, genre: "Rock",       url: "http://mp3channels.webradio.rockantenne.de/rockantenne" },
    { name: "BigFM",          country: "Germany", region: "Europe", lat: 48.7758, lng: 9.1829,  genre: "Urban/Pop",  url: "http://srv05.bigstreams.de/bigfm-mp3-96.m3u" },
    { name: "Sunshine Live",  country: "Germany", region: "Europe", lat: 49.4875, lng: 8.4660,  genre: "Electronic", url: "http://sunshinelive.hoerradar.de/sunshinelive-live-mp3-hq" },
    { name: "89.0 RTL",       country: "Germany", region: "Europe", lat: 51.4969, lng: 11.9691, genre: "Pop/Hits",   url: "http://webradio.89.0rtl.de/livestream128.m3u" },
    { name: "Planet Radio",   country: "Germany", region: "Europe", lat: 50.1109, lng: 8.6821,  genre: "Pop/Dance",  url: "http://mp3.planetradio.de/planetradio/hqlivestream.aac" },
    { name: "Radio Hamburg",  country: "Germany", region: "Europe", lat: 53.5753, lng: 10.0153, genre: "Pop/Hits",   url: "http://stream.radiohamburg.de/rhh/mp3-128/direct/" },
    { name: "FluxFM",         country: "Germany", region: "Europe", lat: 52.5200, lng: 13.4050, genre: "Indie/Chill",url: "https://fluxmusic.api.radiosphere.io/channels/chillout-radio/stream.mp3" },

    // Austria — ORF Bundesweit
    { name: "ORF Ö1", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Kultur/News", url: "https://orf-live.ors-shoutcast.at/oe1-q2a" },
    { name: "ORF Ö3", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Pop", url: "https://orf-live.ors-shoutcast.at/oe3-q2a" },
    { name: "ORF FM4", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Alternative/Youth", url: "https://orf-live.ors-shoutcast.at/fm4-q2a" },

    // Austria — ORF Regional
    { name: "ORF Radio Wien", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/wie-q2a" },
    { name: "ORF Radio Niederösterreich", country: "Austria", region: "Europe", lat: 48.1516, lng: 15.6233, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/noe-q2a" },
    { name: "ORF Radio Oberösterreich", country: "Austria", region: "Europe", lat: 48.3059, lng: 14.2862, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/ooe-q2a" },
    { name: "ORF Radio Salzburg", country: "Austria", region: "Europe", lat: 47.8095, lng: 13.0550, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/sbg-q2a" },
    { name: "ORF Radio Steiermark", country: "Austria", region: "Europe", lat: 47.0707, lng: 15.4395, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/stm-q2a" },
    { name: "ORF Radio Kärnten", country: "Austria", region: "Europe", lat: 46.6228, lng: 14.3068, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/ktn-q2a" },
    { name: "ORF Radio Tirol", country: "Austria", region: "Europe", lat: 47.2692, lng: 11.4041, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/tir-q2a" },
    { name: "ORF Radio Vorarlberg", country: "Austria", region: "Europe", lat: 47.4103, lng: 9.7439, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/vbg-q2a" },
    { name: "ORF Radio Burgenland", country: "Austria", region: "Europe", lat: 47.8388, lng: 16.5203, genre: "Regional", url: "https://orf-live.ors-shoutcast.at/bgl-q2a" },
    { name: "ORF Radio Slovenija", country: "Austria", region: "Europe", lat: 46.6228, lng: 14.3068, genre: "Slowenisch/Regional", url: "https://orf-live.ors-shoutcast.at/slo-q2a" },

    // Austria — KroneHit
    { name: "KroneHit Live", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Pop/Hits", url: "http://onair.krone.at/kronehit.mp3" },

    // Austria — Radio 88.6
    { name: "Radio 88.6", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Rock", url: "http://radio886.at/streams/radio_88.6/mp3" },
    { name: "Radio 88.6 Hard Rock", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Hard Rock", url: "http://radio886.at/streams/88.6_Hard_Rock/mp3" },
    { name: "Radio 88.6 Classic Rock", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Classic Rock", url: "http://radio886.at/streams/88.6_Classic_Rock/mp3" },
    { name: "Radio 88.6 New Rock", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "New Rock", url: "http://radio886.at/streams/88.6_New_Rock/mp3" },
    { name: "Radio 88.6 Metal", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Metal", url: "http://radio886.at/streams/88.6_Metal/mp3" },

    // Austria — Radio Arabella
    { name: "Radio Arabella Wien", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Pop/Schlager", url: "https://edge05.streams.arabella.at/arabella-wien" },
    { name: "Radio Arabella Austropop", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Austropop", url: "https://edge59.streams.arabella.at/arabella-austropop" },
    { name: "Radio Arabella 90s", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "90er", url: "https://edge03.stream.radioarabella.de/radioarabella-90er/stream/mp3" },
    { name: "Radio Arabella Relax", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Relax", url: "https://edge67.streams.arabella.at/arabella-relax" },
    { name: "Radio Arabella Rock", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Rock", url: "https://edge03.streams.arabella.at/arabella-rock" },
    { name: "Radio Arabella NÖ", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Pop/Regional", url: "https://edge09.streams.arabella.at/arabella-niederoesterreich/stream/mp3" },

    // Austria — Antenne-Gruppe
    { name: "Antenne Austria", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Pop/Hits", url: "https://edge01.streamonkey.net/antoesterreich-live" },
    { name: "Antenne Wien", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Pop/Hits", url: "https://edge08.streamonkey.net/antwien-live" },
    { name: "Antenne Kärnten", country: "Austria", region: "Europe", lat: 46.6228, lng: 14.3068, genre: "Pop/Regional", url: "http://live.antenne.at/ak" },
    { name: "Antenne Steiermark", country: "Austria", region: "Europe", lat: 47.0707, lng: 15.4395, genre: "Pop/Regional", url: "http://livestream.antenne.at:80" },

    // Austria — O94
    { name: "O94 Wien", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Pop/Hits", url: "http://stream.o94.at:8001/live.mp3" },

    // Austria — Rock
    { name: "Rock Antenne Österreich", country: "Austria", region: "Europe", lat: 48.2082, lng: 16.3738, genre: "Rock", url: "https://s6-webradio.webradio.de/rockantenne-oesterreich" },

    // Switzerland (German)
    { name: "SRF 1", country: "Switzerland", region: "Europe", lat: 47.3769, lng: 8.5417, genre: "News/Kultur", url: "https://stream.srg-ssr.ch/m/drs1/mp3_128" },
    { name: "SRF 2 Kultur", country: "Switzerland", region: "Europe", lat: 47.3769, lng: 8.5417, genre: "Klassik", url: "https://stream.srg-ssr.ch/m/drs2/mp3_128" },
    { name: "SRF 3", country: "Switzerland", region: "Europe", lat: 47.3769, lng: 8.5417, genre: "Pop", url: "https://stream.srg-ssr.ch/m/drs3/mp3_128" },
    { name: "SRF 4 News", country: "Switzerland", region: "Europe", lat: 47.3769, lng: 8.5417, genre: "News", url: "https://stream.srg-ssr.ch/m/drs4news/mp3_128" },

    // Switzerland (French)
    { name: "RTS La Première", country: "Switzerland", region: "Europe", lat: 46.2044, lng: 6.1432, genre: "News/Talk", url: "https://stream.srg-ssr.ch/m/la-1ere/mp3_128" },
    { name: "RTS Couleur 3", country: "Switzerland", region: "Europe", lat: 46.2044, lng: 6.1432, genre: "Alternative", url: "https://stream.srg-ssr.ch/m/couleur3/mp3_128" },
    { name: "RTS Option Musique", country: "Switzerland", region: "Europe", lat: 46.2044, lng: 6.1432, genre: "Klassik", url: "https://stream.srg-ssr.ch/m/option-musique/mp3_128" },
    { name: "Radio Suisse Jazz", country: "Switzerland", region: "Europe", lat: 46.9481, lng: 7.4474, genre: "Jazz", url: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },

    // France
    { name: "France Inter", country: "France", region: "Europe", lat: 48.8566, lng: 2.3522, genre: "Talk/Musik", url: "https://icecast.radiofrance.fr/franceinter-midfi.mp3" },
    { name: "France Info", country: "France", region: "Europe", lat: 48.8566, lng: 2.3522, genre: "Nachrichten", url: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3" },
    { name: "France Culture", country: "France", region: "Europe", lat: 48.8566, lng: 2.3522, genre: "Kultur", url: "https://icecast.radiofrance.fr/franceculture-midfi.mp3" },
    { name: "FIP", country: "France", region: "Europe", lat: 48.8566, lng: 2.3522, genre: "Musik/World", url: "https://icecast.radiofrance.fr/fip-midfi.mp3" },
    { name: "France Musique", country: "France", region: "Europe", lat: 48.8566, lng: 2.3522, genre: "Klassik", url: "https://icecast.radiofrance.fr/francemusique-midfi.mp3" },
    { name: "Mouv", country: "France", region: "Europe", lat: 48.8566, lng: 2.3522, genre: "HipHop/Urban", url: "https://icecast.radiofrance.fr/mouv-midfi.mp3" },
    { name: "RFI Monde", country: "France", region: "Europe", lat: 48.8566, lng: 2.3522, genre: "Nachrichten", url: "https://rfimonde-96k.ice.infomaniak.ch/rfimonde-96k.mp3" },

    // Italy
    { name: "RAI Radio 1",    country: "Italy", region: "Europe", lat: 41.9028, lng: 12.4964, genre: "News/Talk",       url: "http://icestreaming.rai.it/1.mp3" },
    { name: "RTL 102.5",      country: "Italy", region: "Europe", lat: 45.46,  lng: 9.18,   genre: "Top 40/Pop",      url: "https://shoutcast.rtl.it:8000/" },
    { name: "Radio Italia",   country: "Italy", region: "Europe", lat: 45.48,  lng: 9.24,   genre: "Ital. Musik",     url: "https://stream.radioitalia.it/" },
    { name: "RDS",            country: "Italy", region: "Europe", lat: 41.90,  lng: 12.49,  genre: "Hits",            url: "https://broadcast.rds.it/rds.mp3" },
    { name: "Radio Deejay",   country: "Italy", region: "Europe", lat: 45.46,  lng: 9.16,   genre: "Pop/Unterhaltung",url: "https://maggie.deejay.it/revival.mp3" },
    { name: "Radio 105",      country: "Italy", region: "Europe", lat: 45.47,  lng: 9.17,   genre: "Urban/Pop",       url: "https://icecast.unitedradio.it/Radio105.mp3" },

    { name: "Virgin Radio IT", country: "Italy", region: "Europe", lat: 45.47, lng: 9.17,   genre: "Rock",            url: "https://icecast.unitedradio.it/Virgin.mp3" },
    { name: "Radio 24",       country: "Italy", region: "Europe", lat: 45.47,  lng: 9.14,   genre: "News/Wirtschaft", url: "https://shoutcast.radio24.it/listen.mp3" },
    { name: "RAI Radio 2", country: "Italy", region: "Europe", lat: 41.9028, lng: 12.4964, genre: "Pop", url: "https://icestreaming.rai.it/2.mp3" },
    { name: "RAI Radio 3", country: "Italy", region: "Europe", lat: 41.9028, lng: 12.4964, genre: "Klassik/Kultur", url: "https://icestreaming.rai.it/3.mp3" },
    { name: "RAI Radio 4", country: "Italy", region: "Europe", lat: 41.9028, lng: 12.4964, genre: "Talk/Nachrichten", url: "https://icestreaming.rai.it/4.mp3" },
    { name: "RAI Radio 5", country: "Italy", region: "Europe", lat: 41.9028, lng: 12.4964, genre: "Klassik", url: "https://icestreaming.rai.it/5.mp3" },

    // South Tyrol / Südtirol
    { name: "RAI Südtirol", country: "South Tyrol", region: "Europe", lat: 46.4983, lng: 11.3548, genre: "Nachrichten/Kultur", url: "http://radiobzlive.rai.it/RAIBZ_Livestream" },
    { name: "RAI Alto Adige", country: "South Tyrol", region: "Europe", lat: 46.4983, lng: 11.3548, genre: "Nachrichten", url: "http://radiobzlive.rai.it/RAI_AltoAdige" },
    { name: "Südtirol 1", country: "South Tyrol", region: "Europe", lat: 46.4983, lng: 11.3548, genre: "Pop/Talk", url: "https://funkhaus-st.streamabc.net/106-suedtirol1-mp3-192-7572619" },
    { name: "Radio Holiday", country: "South Tyrol", region: "Europe", lat: 46.4983, lng: 11.3548, genre: "Pop/Oldies", url: "http://stream.radioholiday.it:8000/" },

    // North America
    { name: "KEXP", country: "USA", region: "North America", lat: 47.6062, lng: -122.3321, genre: "Alternative", url: "https://kexp-mp3-128.streamguys1.com/kexp128.mp3" },
    { name: "SomaFM Groove Salad", country: "USA", region: "North America", lat: 37.7749, lng: -122.4194, genre: "Ambient/Chill", url: "https://ice2.somafm.com/groovesalad-128-mp3" },
    { name: "SomaFM Lush", country: "USA", region: "North America", lat: 37.7749, lng: -122.4194, genre: "Chillout", url: "https://ice4.somafm.com/lush-128-mp3" },
    { name: "SomaFM Seventies", country: "USA", region: "North America", lat: 37.7749, lng: -122.4194, genre: "70s Pop", url: "https://ice2.somafm.com/seventies-128-mp3" },
    { name: "SomaFM Reggae", country: "USA", region: "North America", lat: 37.7749, lng: -122.4194, genre: "Reggae", url: "https://ice2.somafm.com/reggae-128-mp3" },

    // Plautdietsch / Mennonite (Deutschland & Diaspora)
    { name: "Segenswelle Plautdietsch", country: "Germany", region: "Europe", lat: 51.1657, lng: 10.4515, genre: "Christlich/Plautdietsch", url: "http://www.segenswelle.de:8000/plautdietsch" },
    { name: "De Stemm Radio", country: "Germany", region: "Europe", lat: 51.1657, lng: 10.4515, genre: "Plautdietsch", url: "http://s2.stationplaylist.com:7044/listen.aac" },

    // Mennonite / Deutsch in Nordamerika
    { name: "BBN German", country: "USA", region: "North America", lat: 35.2271, lng: -80.8431, genre: "Christlich/Deutsch", url: "https://streams.radiomast.io/79ce8dd0-c0e9-4443-b887-0fdc1617f8bc" },
    { name: "De Brigj Radio CHPD 105.9", country: "Canada", region: "North America", lat: 42.7700, lng: -80.9800, genre: "Mennonitisch/Plautdietsch", url: "https://radio.mcson.org/stream" },

    // Africa
    { name: "Hit Radio Namibia", country: "Namibia", region: "Africa", lat: -22.5597, lng: 17.0832, genre: "Pop/Hits", url: "https://s37.derstream.net/hitradio-namibia.mp3" },

    // Turkey
    { name: "Metro FM", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Pop/Hits", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/METRO_FM.mp3" },
    { name: "Joy FM", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Pop/Dance", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3" },
    { name: "Joy Türk", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Türkçe Pop", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_TURK.mp3" },
    { name: "Super FM", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Dance/House", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER_FM.mp3" },
    { name: "Virgin Radio Turkey", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Rock/Pop", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIO.mp3" },
    { name: "Borusan Klasik", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Klassik", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/BORUSAN_KLASIK.mp3" },
    { name: "Power Türk", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Türkçe Pop", url: "https://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio" },
    { name: "Power FM", country: "Turkey", region: "Europe/Asia", lat: 41.0082, lng: 28.9784, genre: "Pop/Dance", url: "https://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio" },

    // Asia
    { name: "All India Radio", country: "India", region: "Asia", lat: 28.6139, lng: 77.2090, genre: "Talk/Musik", url: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/chunklist.m3u8" },
];

// --- Logo resolution ---
const FALLBACK_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23adb5bd'%3E%3Cpath d='M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.1-.9-2-2-2H7.3l8.26-3.34L14.83 1 3.24 6.15zM20 20H4V8h16v12zm-8-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z'/%3E%3C/svg%3E";

// Verified logo URLs (all HTTP 200 confirmed)
const STATION_LOGOS = {
    // Ireland
    "http://icecast.rte.ie/radio1": "https://www.rte.ie/favicon.ico",
    "http://icecast.rte.ie/2fm":    "https://www.rte.ie/favicon.ico",
    "http://icecast.rte.ie/lyric":  "https://www.rte.ie/favicon.ico",
    "http://icecast.rte.ie/rnag":   "https://www.rte.ie/favicon.ico",
    // UK
    "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service": "https://rmp.files.bbci.co.uk/rmp-shared-assets/1.4.0/img/network-logos/national/bbc_world_service_colour.svg",
    // Germany
    "https://stream.rockantenne.de/rockantenne/stream/mp3":          "https://www.rockantenne.de/favicon.ico",
    "https://wdr-wdr2-nachrichten.icecast.wdr.de/wdr/wdr2/nachrichten/mp3/128/stream.mp3": "https://www.wdr2.de/favicon.ico",
    "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3":      "https://www.deutschlandfunk.de/favicon.ico",
    "https://st02.sslstream.dlf.de/dlf/02/128/mp3/stream.mp3":      "https://www.deutschlandfunkkultur.de/favicon.ico",
    "https://st03.sslstream.dlf.de/dlf/03/128/mp3/stream.mp3":      "https://www.deutschlandradio.de/favicon.ico",
    "https://swr-swr3-live.cast.addradio.de/swr/swr3/live/mp3/128/stream.mp3": "https://www.swr3.de/favicon.ico",
    "http://avw.mdr.de/streams/284300-3_mp3_high.m3u":              "https://www.mdr.de/favicon.ico",
    "https://streams.br.de/bayern3_2.m3u":                          "https://www.br.de/favicon.ico",
    "https://streams.br.de/br-klassik_2.m3u":                       "https://www.br-klassik.de/favicon.ico",
    "http://mp3channels.webradio.antenne.de/antenne":               "https://www.antennebayern.de/favicon.ico",
    "http://mp3.ffh.de/radioffh/hqlivestream.mp3":                  "https://www.ffh.de/favicon.ico",
    "http://bob.hoerradar.de/radiobob-live-mp3-hq":                 "https://www.radiobob.de/favicon.ico",
    "http://mp3channels.webradio.rockantenne.de/rockantenne":        "https://www.rockantenne.de/favicon.ico",
    "http://srv05.bigstreams.de/bigfm-mp3-96.m3u":                  "https://www.bigfm.de/favicon.ico",
    "http://sunshinelive.hoerradar.de/sunshinelive-live-mp3-hq":    "https://www.sunshine-live.de/favicon.ico",
    "http://webradio.89.0rtl.de/livestream128.m3u":                 "https://www.890rtl.de/favicon.ico",
    "http://mp3.planetradio.de/planetradio/hqlivestream.aac":       "https://www.planetradio.de/favicon.ico",
    "http://stream.radiohamburg.de/rhh/mp3-128/direct/":            "https://www.radiohamburg.de/favicon.ico",
    "https://fluxmusic.api.radiosphere.io/channels/chillout-radio/stream.mp3": "https://www.fluxfm.de/favicon.ico",
    "https://icecast.ndr.de/ndr/ndr2/niedersachsen/mp3/128/stream.mp3": "https://www.ndr.de/favicon.ico",
    "https://icecast.ndr.de/ndr/ndrkultur/live/mp3/128/stream.mp3":  "https://www.ndr.de/favicon.ico",
    "https://dispatcher.rndfnk.com/br/br1/obb/mp3/mid": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/BR1_Logo_2024.svg/3840px-BR1_Logo_2024.svg.png",
    "https://dispatcher.rndfnk.com/br/br2/live/mp3/mid": "https://www.ard-media.de/fileadmin/user_upload/radio/sender_und_kombis/bilder/sender_logo/Neue_Logos/Einzelsender/BR2__01.png",
    "https://dispatcher.rndfnk.com/br/br3/live/mp3/low":             "https://www.br.de/favicon.ico",
    "https://dispatcher.rndfnk.com/br/br24/live/mp3/mid": "https://www.br.de/presse/inhalt/pressemitteilungen/logo-br24-102~_v-img__16__9__l_-1dc0e8f74459dd04c91a0d45af4972b9069f1135.jpg?version=6449e",
    "https://wdr-1live-live.icecastssl.wdr.de/wdr/1live/live/mp3/128/stream.mp3": "https://www.1live.de/favicon.ico",
    // Austria — ORF
    "https://orf-live.ors-shoutcast.at/oe1-q2a":  "https://oe1.orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/oe3-q2a":  "https://tubestatic.orf.at/mojo/1_3/storyserver//tube/common/images/apple-icons/oe3.png",
    "https://orf-live.ors-shoutcast.at/fm4-q2a":  "https://tubestatic.orf.at/mojo/1_3/storyserver//tube/fm4/images/touch-icon-iphone-retina.png",
    "https://orf-live.ors-shoutcast.at/wie-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/noe-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/ooe-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/sbg-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/stm-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/ktn-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/tir-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/vbg-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/bgl-q2a":  "https://orf.at/favicon.ico",
    "https://orf-live.ors-shoutcast.at/slo-q2a":  "https://orf.at/favicon.ico",
    // Austria — private
    "http://onair.krone.at/kronehit.mp3":          "https://www.kronehit.at/favicon.ico",
    "http://radio886.at/streams/radio_88.6/mp3":   "https://www.radio886.at/favicon.ico",
    "http://radio886.at/streams/88.6_Hard_Rock/mp3":    "https://www.radio886.at/favicon.ico",
    "http://radio886.at/streams/88.6_Classic_Rock/mp3": "https://www.radio886.at/favicon.ico",
    "http://radio886.at/streams/88.6_New_Rock/mp3":     "https://www.radio886.at/favicon.ico",
    "http://radio886.at/streams/88.6_Metal/mp3":        "https://www.radio886.at/favicon.ico",
    "https://edge05.streams.arabella.at/arabella-wien":    "https://www.arabella.at/favicon.ico",
    "https://edge59.streams.arabella.at/arabella-austropop": "https://www.arabella.at/favicon.ico",
    "https://edge03.stream.radioarabella.de/radioarabella-90er/stream/mp3": "https://www.arabella.at/favicon.ico",
    "https://edge67.streams.arabella.at/arabella-relax":   "https://www.arabella.at/favicon.ico",
    "https://edge03.streams.arabella.at/arabella-rock":    "https://www.arabella.at/favicon.ico",
    "https://edge09.streams.arabella.at/arabella-niederoesterreich/stream/mp3": "https://www.arabella.at/favicon.ico",
    "https://edge01.streamonkey.net/antoesterreich-live":  "https://www.antenne.at/favicon.ico",
    "https://edge08.streamonkey.net/antwien-live":         "https://www.antenne.at/favicon.ico",
    "http://live.antenne.at/ak":       "https://upload.wikimedia.org/wikipedia/commons/6/63/Antenne_Logo.svg",
    "http://livestream.antenne.at:80": "https://www.antenne.at/favicon.ico",
    "https://s6-webradio.webradio.de/rockantenne-oesterreich": "http://www.rockantenne.de/logos/rock-antenne/apple-touch-icon.png",
    // Switzerland
    "https://stream.srg-ssr.ch/m/drs1/mp3_128":        "https://www.srf.ch/var/storage/assets/webpack/favicons/srf-apple-touch-icon.png",
    "https://stream.srg-ssr.ch/m/drs2/mp3_128":        "https://www.srf.ch/var/storage/assets/webpack/favicons/srf-apple-touch-icon.png",
    "https://stream.srg-ssr.ch/m/drs3/mp3_128":        "https://www.srf.ch/var/storage/assets/webpack/favicons/srf-apple-touch-icon.png",
    "https://stream.srg-ssr.ch/m/drs4news/mp3_128":    "https://www.srf.ch/var/storage/assets/webpack/favicons/srf-apple-touch-icon.png",
    "https://stream.srg-ssr.ch/m/la-1ere/mp3_128":     "https://www.rts.ch/hbv7/static/images/favicon/rts/152x152.png",
    "https://stream.srg-ssr.ch/m/couleur3/mp3_128":    "https://www.rts.ch/hbv7/static/images/favicon/rts/152x152.png",
    "https://stream.srg-ssr.ch/m/option-musique/mp3_128": "https://www.rts.ch/hbv7/static/images/favicon/rts/152x152.png",
    "https://stream.srg-ssr.ch/m/rsj/mp3_128":         "https://www.radioswissjazz.ch/social-media/rsj-web.png",
    // France
    "https://icecast.radiofrance.fr/franceinter-midfi.mp3":  "https://charte.radiofrance.fr/images/franceinter/france-inter-avatar.png",
    "https://icecast.radiofrance.fr/franceinfo-midfi.mp3":   "https://www.francetvinfo.fr/favicon.ico",
    "https://icecast.radiofrance.fr/franceculture-midfi.mp3":"https://charte.radiofrance.fr/images/franceculture/france-culture-avatar.png",
    "https://icecast.radiofrance.fr/fip-midfi.mp3":          "https://charte.radiofrance.fr/images/fip/fip-avatar.png",
    "https://icecast.radiofrance.fr/francemusique-midfi.mp3":"https://charte.radiofrance.fr/images/francemusique/france-musique-avatar.png",
    "https://icecast.radiofrance.fr/mouv-midfi.mp3":         "https://charte.radiofrance.fr/images/mouv/mouv-avatar.png",
    "https://rfimonde-96k.ice.infomaniak.ch/rfimonde-96k.mp3": "https://www.rfi.fr/favicon.ico",
    // Italy
    "http://icestreaming.rai.it/1.mp3":              "https://www.rai.it/favicon.ico",
    "https://shoutcast.rtl.it:8000/":               "https://www.rtl.it/favicon.ico",
    "https://stream.radioitalia.it/":               "https://www.radioitalia.it/favicon.ico",
    "https://broadcast.rds.it/rds.mp3":             "https://www.rds.it/favicon.ico",
    "https://maggie.deejay.it/revival.mp3":         "https://www.deejay.it/favicon.ico",
    "https://icecast.unitedradio.it/Radio105.mp3":  "https://www.105.net/favicon.ico",

    "https://icecast.unitedradio.it/Virgin.mp3":    "https://www.virginradio.it/favicon.ico",
    "https://shoutcast.radio24.it/listen.mp3":      "https://www.radio24.ilsole24ore.com/favicon.ico",
    "https://icestreaming.rai.it/2.mp3": "https://i.imgur.com/gWbnr2R.jpg",
    "https://icestreaming.rai.it/3.mp3": "https://www.rai.it/favicon.ico",
    "https://icestreaming.rai.it/4.mp3": "https://www.rai.it/favicon.ico",
    "https://icestreaming.rai.it/5.mp3": "https://www.rai.it/favicon.ico",
    // South Tyrol
    "http://radiobzlive.rai.it/RAIBZ_Livestream": "http://www.raibz.rai.it/de/touch/square.png",
    "http://radiobzlive.rai.it/RAI_AltoAdige":    "http://www.raibz.rai.it/de/touch/square.png",
    "https://funkhaus-st.streamabc.net/106-suedtirol1-mp3-192-7572619": "https://www.suedtirol1.it/favicon.ico",
    "http://stream.radioholiday.it:8000/":        "https://www.radioholiday.it/wp-content/uploads/cropped-favicon-180x180.png",
    // North America
    "https://kexp-mp3-128.streamguys1.com/kexp128.mp3": "https://www.kexp.org/favicon.ico",
    "https://ice2.somafm.com/groovesalad-128-mp3":  "https://somafm.com/img3/groovesalad-400.jpg",
    "https://ice4.somafm.com/lush-128-mp3":         "https://somafm.com/img3/lush-400.jpg",
    "https://ice2.somafm.com/seventies-128-mp3":    "https://somafm.com/img3/seventies400.jpg",
    "https://ice2.somafm.com/reggae-128-mp3":       "https://somafm.com/img3/reggae400.jpg",
    // Mennonite
    "https://streams.radiomast.io/79ce8dd0-c0e9-4443-b887-0fdc1617f8bc": "https://bbn1.bbnradio.org/russian/wp-content/uploads/sites/10/2023/03/BBN-Amazon-logo48x48Final.png",
    "https://radio.mcson.org/stream": "https://www.mcson.org/wp-content/uploads/2014/07/105.9-logo.jpg",
    // Africa
    "https://s37.derstream.net/hitradio-namibia.mp3": "https://hitradio.com.na/favicon.ico",
    // Turkey
    "https://playerservices.streamtheworld.com/api/livestream-redirect/METRO_FM.mp3":      "https://mediacdns.karnaval.com/media/station_media/3/icons/favicon.ico",
    "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3":        "https://mediacdns.karnaval.com/media/station_media/4/icons/favicon.ico",
    "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_TURK.mp3":      "https://mediacdns.karnaval.com/media/station_media/5/icons/favicon.ico",
    "https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER_FM.mp3":      "https://mediacdns.karnaval.com/media/station_media/1/icons/favicon.ico",
    "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIO.mp3":  "https://mediacdns.karnaval.com/media/station_media/6/icons/favicon.ico",
    "https://playerservices.streamtheworld.com/api/livestream-redirect/BORUSAN_KLASIK.mp3":"https://www.borusanmuzik.com.tr/favicon.ico",
    "https://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio": "https://www.powerapp.com.tr/favicon.ico",
    "https://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio":   "https://www.powerapp.com.tr/favicon.ico",
    // Asia
    "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/chunklist.m3u8": "https://www.google.com/s2/favicons?domain=allindiaradio.gov.in&sz=64",
};

function getLogoUrl(streamUrl) {
    return STATION_LOGOS[streamUrl] || FALLBACK_LOGO;
}

function getLogoDomain(streamUrl) {
    const u = streamUrl.toLowerCase();
    if (u.includes('ors-shoutcast.at'))    return 'orf.at';
    if (u.includes('radiofrance.fr'))      return 'radiofrance.fr';
    if (u.includes('rfimonde'))            return 'rfi.fr';
    if (u.includes('rai.it'))              return 'rai.it';
    if (u.includes('srg-ssr.ch'))          return u.includes('/la-')||u.includes('/couleur')||u.includes('/option')||u.includes('/rsj') ? 'rts.ch' : 'srf.ch';
    if (u.includes('kexp'))                return 'kexp.org';
    if (u.includes('somafm.com'))          return 'somafm.com';
    if (u.includes('krone.at'))            return 'kronehit.at';
    if (u.includes('radio886.at'))         return 'radio886.at';
    if (u.includes('arabella'))            return 'arabella.at';
    if (u.includes('antenne.at')||u.includes('streamonkey.net')) return 'antenne.at';
    if (u.includes('rockantenne'))         return 'rockantenne.de';
    if (u.includes('ndr.de'))              return 'ndr.de';
    if (u.includes('rndfnk.com'))          return 'br.de';
    if (u.includes('1live'))               return '1live.de';
    if (u.includes('wdr.de'))              return 'wdr.de';
    if (u.includes('mcson.org'))           return 'mcson.org';
    if (u.includes('suedtirol1'))          return 'suedtirol1.it';
    if (u.includes('radioholiday'))        return 'radioholiday.it';
    try { return new URL(streamUrl).hostname; } catch { return null; }
}

const audioPlayer = document.getElementById('audio-player');
const stationListContainer = document.getElementById('station-list');
const searchInput = document.getElementById('search-input');
const playerStationName = document.getElementById('player-station-name');
const playerStationCountry = document.getElementById('player-station-country');
const volumeSlider = document.getElementById('volume');
const showAllBtn = document.getElementById('show-all-btn');

let currentStation = null;
let map;
let markers = [];
let hls = null;

// Generate a deterministic shortwave-style frequency from a station name
function getFrequency(name) {
    let h = 5381;
    for (let i = 0; i < name.length; i++) h = ((h << 5) + h) ^ name.charCodeAt(i);
    h = Math.abs(h);
    const bands = [[5900,6200],[7200,7600],[9400,9900],[11600,12050],[13600,13800],[15100,15800],[17550,17900],[21450,21850]];
    const b = bands[h % bands.length];
    const freq = b[0] + (h % (b[1] - b[0]));
    return (freq / 1000).toFixed(3);
}

// UTC clock
function updateClock() {
    const el = document.getElementById('map-utc-time');
    if (el) {
        const now = new Date();
        const hh = String(now.getUTCHours()).padStart(2,'0');
        const mm = String(now.getUTCMinutes()).padStart(2,'0');
        const ss = String(now.getUTCSeconds()).padStart(2,'0');
        el.textContent = `${hh}:${mm}:${ss} UTC`;
    }
}
setInterval(updateClock, 1000);
updateClock();

// Footer year
document.addEventListener('DOMContentLoaded', () => {
    const fy = document.getElementById('footer-year');
    if (fy) fy.textContent = new Date().getFullYear();
});

// Function to initialize the map
function initMap() {
    map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Custom HUD marker icon (Diamond pin)
    const hudIcon = L.divIcon({
        className: 'midcentury-marker',
        html: '<div class="marker-pulse"></div><div class="marker-core"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 20] // Precise anchor for the tip
    });

    // Group stations by coordinates to avoid overlapping markers
    const groupedStations = {};
    stations.forEach(station => {
        const key = `${station.lat},${station.lng}`;
        if (!groupedStations[key]) {
            groupedStations[key] = [];
        }
        groupedStations[key].push(station);
    });

    // Add markers for each unique location
    Object.entries(groupedStations).forEach(([coords, stationsAtLocation]) => {
        const [lat, lng] = coords.split(',').map(Number);
        const marker = L.marker([lat, lng], { icon: hudIcon }).addTo(map);
        
        const country = stationsAtLocation[0].country;
        const region = stationsAtLocation[0].region;
        
        marker.bindPopup(`<b>${country}</b> (${region})<br>${stationsAtLocation.length} stations`);
        
        marker.on('click', () => {
            filterByLocation(lat, lng);
        });
        
        markers.push(marker);
    });
}

// Function to filter stations by location
function filterByLocation(lat, lng) {
    const filteredStations = stations.filter(s => s.lat === lat && s.lng === lng);
    renderStations(filteredStations);
}

// Function to load stations into the UI
function renderStations(stationsToRender) {
    stationListContainer.innerHTML = '';
    const bandCount = document.getElementById('band-count');
    if (bandCount) bandCount.textContent = `— ${stationsToRender.length} STATIONS —`;

    if (stationsToRender.length === 0) {
        stationListContainer.innerHTML = '<p style="color:var(--amber-dim);letter-spacing:.15em;font-size:.75rem;padding:1rem;">NO STATIONS FOUND</p>';
        return;
    }

    stationsToRender.forEach(station => {
        const logoUrl = getLogoUrl(station.url);
        const freq = getFrequency(station.name);
        const isPlaying = currentStation && currentStation.url === station.url;
        const card = document.createElement('div');
        card.className = 'station-card' + (isPlaying ? ' playing' : '');
        card.dataset.url = station.url;
        card.innerHTML = `
            <div class="card-top">
                <div class="station-card-logo-wrap">
                    <img class="station-card-logo"
                         src="${logoUrl}"
                         alt="${station.name}"
                         onerror="this.onerror=null;this.src='${FALLBACK_LOGO}'">
                </div>
                <div class="card-freq">
                    <span class="card-freq-value">${freq}</span>
                    <span class="card-freq-unit">MHz SW</span>
                </div>
            </div>
            <h5 class="station-card-title">${station.name}</h5>
            <p class="station-card-subtitle">${station.country} · ${station.region}</p>
            <div class="station-card-genre">${station.genre}</div>
        `;
        card.addEventListener('click', () => playStation(station));
        stationListContainer.appendChild(card);
    });
}

// ─── NOW PLAYING / ICY METADATA ──────────────────────────────────────────────

let metaTimer = null;
let metaActiveUrl = null;

// Radio France livemeta API station IDs
const RF_STATION_IDS = {
    "https://icecast.radiofrance.fr/franceinter-midfi.mp3":   "franceinter",
    "https://icecast.radiofrance.fr/franceinfo-midfi.mp3":    "franceinfo",
    "https://icecast.radiofrance.fr/franceculture-midfi.mp3": "franceculture",
    "https://icecast.radiofrance.fr/fip-midfi.mp3":           "fip",
    "https://icecast.radiofrance.fr/francemusique-midfi.mp3": "francemusique",
    "https://icecast.radiofrance.fr/mouv-midfi.mp3":          "mouv",
};

async function fetchRFMeta(stationId) {
    try {
        const r = await fetch(`https://api.radiofrance.fr/livemeta/pull/${stationId}`,
            { signal: AbortSignal.timeout(5000) });
        if (!r.ok) return null;
        const d = await r.json();
        const now = d?.now;
        if (!now) return null;
        return [now.firstLine, now.secondLine].filter(Boolean).join(' · ') || null;
    } catch { return null; }
}

async function fetchICYMeta(url) {
    try {
        const ctrl = new AbortController();
        const tid = setTimeout(() => ctrl.abort(), 9000);
        const response = await fetch(url, {
            headers: { 'Icy-MetaData': '1' },
            signal: ctrl.signal
        });
        clearTimeout(tid);

        const metaint = parseInt(response.headers.get('icy-metaint') || '0');
        if (!metaint) { response.body.cancel(); return null; }

        const reader = response.body.getReader();
        const needed = metaint + 1 + 4080;
        const chunks = [];
        let totalRead = 0;

        while (totalRead < needed) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
            totalRead += value.length;
        }
        reader.cancel();

        const buf = new Uint8Array(totalRead);
        let off = 0;
        for (const c of chunks) { buf.set(c, off); off += c.length; }

        if (buf.length <= metaint) return null;
        const metaLen = buf[metaint] * 16;
        if (metaLen === 0) return null;

        const metaStart = metaint + 1;
        if (buf.length < metaStart + metaLen) return null;

        const metaStr = new TextDecoder('utf-8', { fatal: false })
            .decode(buf.slice(metaStart, metaStart + metaLen));
        const match = metaStr.match(/StreamTitle='([^']*)'/);
        return match?.[1]?.trim() || null;
    } catch { return null; }
}

function setNowPlaying(title) {
    const el = document.getElementById('player-now-playing');
    if (!el) return;
    if (!title) { el.style.display = 'none'; el.innerHTML = ''; return; }
    el.style.display = 'block';
    // Use scrolling only when text is longer than the container
    const needsScroll = title.length > 28;
    if (needsScroll) {
        el.classList.add('scrolling');
        el.innerHTML = `<span>${title}&nbsp;&nbsp;&nbsp;</span>`;
    } else {
        el.classList.remove('scrolling');
        el.textContent = title;
    }
}

async function pollNowPlaying(station) {
    if (!station || station.url !== metaActiveUrl) return;
    let title = null;
    const rfId = RF_STATION_IDS[station.url];
    if (rfId) title = await fetchRFMeta(rfId);
    if (!title) title = await fetchICYMeta(station.url);
    if (station.url !== metaActiveUrl) return; // station changed while awaiting
    setNowPlaying(title);
}

function startMetaPolling(station) {
    stopMetaPolling();
    metaActiveUrl = station.url;
    setNowPlaying(null);
    pollNowPlaying(station);
    metaTimer = setInterval(() => pollNowPlaying(station), 20000);
}

function stopMetaPolling() {
    if (metaTimer) { clearInterval(metaTimer); metaTimer = null; }
    metaActiveUrl = null;
}

// Function to play a station
function playStation(station) {
    // Remove playing class from all cards
    document.querySelectorAll('.station-card.playing').forEach(c => c.classList.remove('playing'));
    // Add to current
    const activeCard = document.querySelector(`.station-card[data-url="${CSS.escape(station.url)}"]`);
    if (activeCard) activeCard.classList.add('playing');

    currentStation = station;
    playerStationName.textContent = station.name;
    playerStationCountry.textContent = station.country + ' · ' + station.region;

    // Update header freq display
    const hf = document.getElementById('header-freq-value');
    if (hf) hf.textContent = getFrequency(station.name) + ' MHz';

    // Logo
    const playerLogo = document.getElementById('player-station-logo');
    const placeholder = document.getElementById('player-logo-placeholder');
    playerLogo.src = getLogoUrl(station.url);
    playerLogo.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';

    // Signal bars
    const bars = document.getElementById('signal-bars');
    if (bars) bars.classList.add('active');
    
    // Reset HLS if it's already running
    if (hls) {
        hls.destroy();
        hls = null;
    }

    // Check if URL is HLS (m3u8) or standard audio
    if (station.url.endsWith('.m3u8')) {
        if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(station.url);
            hls.attachMedia(audioPlayer);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                audioPlayer.play();
            });
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    console.error("HLS fatal error:", data);
                    playerStationName.textContent = "Error: " + station.name + " (HLS failed)";
                }
            });
        } else if (audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            // Safari has native HLS support
            audioPlayer.src = station.url;
            audioPlayer.play();
        } else {
            playerStationName.textContent = "Error: Browser does not support HLS";
        }
    } else {
        audioPlayer.src = station.url;
        audioPlayer.play().catch(error => {
            console.error("Playback failed:", error);
            playerStationName.textContent = "Error: " + station.name + " (Blocked or invalid stream)";
        });
    }

    startMetaPolling(station);
}

// Function to handle volume change
function setVolume() {
    audioPlayer.volume = volumeSlider.value;
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStations = stations.filter(station =>
        station.name.toLowerCase().includes(searchTerm) ||
        station.country.toLowerCase().includes(searchTerm) ||
        station.region.toLowerCase().includes(searchTerm) ||
        station.genre.toLowerCase().includes(searchTerm)
    );
    renderStations(filteredStations);
});

volumeSlider.addEventListener('input', setVolume);

showAllBtn.addEventListener('click', () => {
    renderStations(stations);
    searchInput.value = '';
    // Reset map view
    map.setView([20, 0], 2);
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderStations(stations);
    audioPlayer.volume = volumeSlider.value;
    // Remove Bootstrap col class — we use our own grid
    stationListContainer.classList.remove('row','row-cols-1','row-cols-md-2','row-cols-lg-3','g-4');
});


audioPlayer.addEventListener('error', (e) => {
    if (!hls) {
        console.error("Audio player error:", e);
        playerStationName.textContent = "Error loading station";
        playerStationCountry.textContent = "";
    }
    stopMetaPolling();
    setNowPlaying(null);
});

audioPlayer.addEventListener('pause', () => {
    stopMetaPolling();
});

audioPlayer.addEventListener('play', () => {
    if (currentStation) {
        playerStationName.textContent = currentStation.name;
        playerStationCountry.textContent = currentStation.country + ' · ' + currentStation.region;
        if (!metaTimer) startMetaPolling(currentStation);
    }
});
