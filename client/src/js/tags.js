const ABSTRACTIONS = {
    "TIT2": "Title",
    "TCON": "Genre",
    "TALB": "Album",
    "TPE2": "Album Artist",
    "TCOM": "Composer",
    "TEXT": "Lyricist",
    "TIT3": "Mix Name",
    "TOPE": "Original Artist",
    "TIT1": "Content Group",
    "GRP1": "Grouping iTunes",
    "TPUB": "Label",
    "TPE4": "Remixer",
    "IPLS": "Producer ID3v2.3",
    "TIPL": "Producer ID3v2.4",
    "TPE3": "Conductor",
    "TBPM": "BPM",
    "TCOP": "Copyright",
    "TDAT": "Release Date",
    "TDOR": "Original Year",
    "TDRL": "Releasetime",
    "TKEY": "Key",
    "TLEN": "Length",
    "TMOO": "Mood",
    "TPE1": "Artist",
    "TPOS": "Discnumber",
    "TRCK": "Tracknumber",
    "TSRC": "ISRC",
    "TYER": "Year",
    "TDRC": "Date Recorded",
    "©alb": "Album",
    "aART": "Album Artist",
    "tmpo": "BPM",
    "©cmt": "Comment",
    "cpil": "Compilation iTunes",
    "©wrt": "Composer",
    "cond": "Conductor",
    "cprt": "Copyright",
    "©day": "Year/Date",
    "desc": "Description",
    "disk": "Disk Number",
    "©too": "Encoded By",
    "©gen": "Genre",
    "©ART": "Artist",
    "©lyr": "Lyrics",
    "©grp": "Grouping",
    "©ope": "Original Artist",
    "©wrk": "Work",
    "soaa": "Album Artist Sort Order",
    "soal": "Album Sort Order",
    "soar": "Artist Sort Order",
    "soco": "Composer Sort Order",
};

const MP4 = [
    "©alb (Album)", 
    "©ART (Artist)",
    "tmpo (BPM)", 
    "©cmt (Comment)", 
    "cpil (Compilation iTunes)",
    "©wrt (Composer)", 
    "cond (Conductor)", 
    "cprt (Copyright)",
    "desc (Description)", 
    "disk (Disk Number)", 
    "©too (Encoded By)", 
    "©gen (Genre)",
    "©grp (Grouping)",
    "©lyr (Lyrics)",
    "©ope (Original Artist)",
    "©wrk (Work)",
    "©day (Year/Date)", 
    "CATALOGNUMBER"
];

const VORBIS = [
    "ALBUM", 
    "ALBUMARTIST", 
    "COMPOSER", 
    "GENRE", 
    "LYRICS", 
    "VERSION", 
    "GROUPING",
    "ORGANIZATION", 
    "PUBLISHER", 
    "MIXARTIST", 
    "REMIXER", 
    "CONDUCTOR", 
    "COMMENT",
    "LABEL"
];

const ID3 = [
    "TCON (Genre)", 
    "TALB (Album)", 
    "TPE2 (Album Artist)", 
    "TCOM (Composer)",
    "TEXT (Lyricist)", 
    "TIT3 (Mix Name)", 
    "TOPE (Original Artist)", 
    "TIT1 (Content Group)",
    "GRP1 (Grouping iTunes)", 
    "TPUB (Label)", 
    "TPE4 (Remixer)", 
    "IPLS (Producer ID3v2.3)",
    "TIPL (Producer ID3v2.4)", 
    "TPE3 (Conductor)", 
    "COMM (Comment)",
    "USLT (Unsynchronized Lyrics)"
]

export {ABSTRACTIONS, MP4, VORBIS, ID3};