const contentTypes = {
    "aac": "audio/aac",                    // AAC аудио
    "abw": "application/x-abiword",        // AbiWord документ
    "adp": "audio/adpcm",                  // ADPCM аудио
    "ai": "application/illustrator",       // Adobe Illustrator файл
    "asc": "text/plain",                   // Простой текст
    "avi": "video/x-msvideo",              // AVI видео
    "azw": "application/vnd.amazon.ebook", // Amazon Kindle eBook
    "bat": "application/x-msdownload",     // Windows исполняемый файл
    "bin": "application/octet-stream",     // Двоичные данные
    "bmp": "image/bmp",                    // BMP изображение
    "bz": "application/x-bzip",            // BZIP архив
    "bz2": "application/x-bzip2",          // BZIP2 архив
    "csh": "application/x-csh",            // C-шелл сценарий
    "css": "text/css",                     // Таблицы стилей
    "csv": "text/csv",                     // CSV файл
    "deb": "application/x-deb",            // Debian пакет
    "djvu": "image/vnd.djvu",              // DJVU изображение
    "dll": "application/octet-stream",     // DLL файл
    "dmg": "application/x-apple-diskimage",// Apple Disk Image
    "doc": "application/msword",           // Microsoft Word документ
    "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Word документ (новый формат)
    "dtd": "application/xml-dtd",          // Document Type Definition
    "dwg": "image/vnd.dwg",                // DWG изображение
    "dxf": "image/vnd.dxf",                // DXF изображение
    "edn": "application/vnd.adobe.edn",   // Adobe EDN файл
    "eps": "application/postscript",      // Encapsulated PostScript
    "es": "application/ecmascript",       // ECMAScript/JavaScript
    "epub": "application/epub+zip",       // EPUB электронная книга
    "fpx": "image/vnd.fpx",               // FlashPix изображение
    "fst": "image/vnd.fst",               // FAST Search & Transfer
    "fvt": "image/vnd.fvt",               // FAST Search & Transfer
    "gif": "image/gif",                   // GIF изображение
    "gz": "application/gzip",             // GZIP архив
    "htm": "text/html",                   // HTML документ
    "html": "text/html",                  // HTML документ
    "ico": "image/vnd.microsoft.icon",    // Иконка
    "ics": "text/calendar",               // iCalendar формат
    "jar": "application/java-archive",    // Java архив
    "java": "text/x-java-source",         // Java исходный код
    "jnlp": "application/x-java-jnlp-file",// Java Network Launch Protocol
    "jpeg": "image/jpeg",                 // JPEG изображение
    "jpg": "image/jpeg",                  // JPEG изображение
    "js": "application/javascript",       // JavaScript файл
    "json": "application/json",           // JSON файл
    "jsonld": "application/ld+json",      // JSON-LD файл
    "kar": "audio/midi",                  // Karaoke MIDI аудио
    "latex": "application/x-latex",       // LaTeX документ
    "log": "text/plain",                  // Текстовый лог-файл
    "lzh": "application/x-lzh",           // LZH архив
    "m3u": "audio/x-mpegurl",            // M3U аудио-плейлист
    "m3u8": "application/vnd.apple.mpegurl",// M3U8 аудио/видео-плейлист
    "m4a": "audio/mp4",                  // M4A аудио
    "m4v": "video/mp4",                  // M4V видео
    "manifest": "text/cache-manifest",    // Manifest файл
    "map": "application/json",            // Source map файл
    "markdown": "text/markdown",          // Markdown документ
    "md": "text/markdown",                // Markdown документ
    "mid": "audio/midi",                  // MIDI аудио
    "midi": "audio/midi",                 // MIDI аудио
    "mj2": "video/mj2",                  // Motion JPEG 2000 видео
    "mjs": "text/javascript",             // JavaScript модуль
    "mp3": "audio/mpeg",                 // MP3 аудио
    "mp4": "video/mp4",                  // MP4 видео
    "mpeg": "video/mpeg",                // MPEG видео
    "mpg": "video/mpeg",                 // MPG видео
    "mpkg": "application/vnd.apple.installer+xml", // Apple Installer Package
    "msi": "application/x-msdownload",   // Windows Installer пакет
    "msm": "application/octet-stream",   // Windows Merge Module
    "msp": "application/octet-stream",   // Windows Installer Patch
    "mxf": "application/mxf",            // Material Exchange Format
    "n3": "text/n3",                     // Notation3
    "oga": "audio/ogg",                  // OGG аудио
    "ogg": "audio/ogg",                  // OGG аудио
    "ogv": "video/ogg",                  // OGG видео
    "ogx": "application/ogg",            // OGG архив
    "otf": "font/otf",                   // OpenType шрифт
    "pdb": "application/vnd.palm",       // Palm Database
    "pdf": "application/pdf",            // PDF документ
    "php": "application/x-httpd-php",    // PHP скрипт
    "png": "image/png",                  // PNG изображение
    "ppt": "application/vnd.ms-powerpoint", // PowerPoint презентация
    "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation", // PowerPoint презентация (новый формат)
    "rar": "application/vnd.rar",        // RAR архив
    "rtf": "application/rtf",            // Rich Text Format документ
    "sh": "application/x-sh",            // Bourne Shell сценарий
    "svg": "image/svg+xml",              // SVG изображение
    "swf": "application/x-shockwave-flash", // Adobe Flash файл
    "tar": "application/x-tar",          // TAR архив
    "tif": "image/tiff",                 // TIFF изображение
    "tiff": "image/tiff",                // TIFF изображение
    "ts": "video/mp2t",                  // MPEG transport stream
    "ttf": "font/ttf",                   // TrueType шрифт
    "txt": "text/plain",                 // Текстовый документ
    "vsd": "application/vnd.visio",      // Microsoft Visio документ
    "wav": "audio/wav",                  // WAV аудио
    "weba": "audio/webm",                // WEBM аудио
    "webm": "video/webm",                // WEBM видео
    "webp": "image/webp",                // WEBP изображение
    "woff": "font/woff",                 // Web Open Font Format
    "woff2": "font/woff2",               // Web Open Font Format 2.0
    "xhtml": "application/xhtml+xml",    // XHTML документ
    "xls": "application/vnd.ms-excel",   // Microsoft Excel документ
    "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Excel документ (новый формат)
    "xml": "application/xml",            // XML документ
    "xul": "application/vnd.mozilla.xul+xml", // XUL документ
    "zip": "application/zip",            // ZIP архив
    "3gp": "video/3gpp",                 // 3GPP видео
    "3g2": "video/3gpp2",                // 3GPP2 видео
    "7z": "application/x-7z-compressed", // 7-Zip архив
}

module.exports = contentTypes