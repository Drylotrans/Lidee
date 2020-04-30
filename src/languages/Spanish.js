/* eslint-disable max-lines */
const Language = require("../structures/Language");

module.exports = class Spanish extends Language {
    constructor() {
        super({
            strings: {
                // Global
                userNo: "Debes mencionar un usuario o colocar su ID.",
                userPerms: (permission) => `Debes tener el permiso de \`${permission}\` para ejecutar este comando.`,
                botPerms: (permission) => `Debo tener el permiso de \`${permission}\` para ejecutar este comando.`,
                nsfwChannel: "Este comando solo esta disponible en canales NSFW.",
                cooldown: (time) => `Debes esperar ${time} segundos para ejecutar este comando.`,
                premiumOnly: "El servidor debe tener premium para ejecutar este comando.",
                others: (number) => `y otros ${number} más...`,
                roles: (number) => `Roles (${number})`,
                id: (id) => `ID: ${id}`,
                nothing: "Nada para mostrar...",
                imageUrl: "Enlace con máxima resolución",
                // Ban Command
                banNo: "No puedo banear a ese miembro.",
                banPermissions: "Tu no puedes banear a ese miembro.",
                ban: (member) => `El miembro **${member}** ha sido baneado del servidor.`,
                banError: "Ha ocurrido un error mientras se baneaba al miembro.",
                // Clear Command
                clearNumber: "Debes especifcar cuántos mensajes vas a eliminar.",
                clearLimit: "Debes especificar un número entre 0 y 100.",
                clear: (number) => `Han sido eliminados **${number}** mensajes.`,
                clearError: "Ha ocurrido un error mientras se eliminaban mensajes.",
                // Kick Command
                kickNo: "No puedo expulsar a ese miembro.",
                kickPermissions: "Tu no puedes expulsar a ese miembro.",
                kick: (member) => `El miembro **${member}** ha sido expulsado del servidor.`,
                kickError: "Ha ocurrido un error mientras se expulsaba al miembro.",
                // Mute Command
                muteNo: "¡Ese miembro ya está muteado!",
                mutePermissions: "Tu no puedes mutear a ese miembro.",
                mute: (member) => `El miembro **${member}** ha sido muteado del servidor.`,
                // Unmute Command
                unmuteNo: "¡Ese miembro no está muteado!",
                unmute: (member) => `El miembro **${member}** ha sido desmuteado del servidor.`,
                // User Command
                userPermissions: "Permisos de usuario",
                userCreated: "Cuenta creada el",
                userJoined: "Entró al servidor el",
                userActivity: "Actividad de usuario",
                userBoosting: "Boosteando desde",
                userFlags: "Insignias del usuario",
                // Server Command
                serverVanityUrl: "URL de vanidad",
                serverCreated: "Servidor creado el",
                serverOwner: "Server owner",
                serverVerification: "Nivel de verificación",
                serverExplicitContentFilter: "Filtro de contenido multimedia explícito",
                serverDescription: "Descripción del servidor",
                serverFeatures: "Características especiales",
                serverEmojis: "Emojis del servidor",
                serverEmojisNormal: "Emojis normales",
                serverEmojisAnimated: "Emojis animados",
                serverBoosts: "Boosts del servidor",
                serverBoostsTotal: (level, number) => `**Nivel ${level}** - ${number} boosts`,
                // Ping Command
                pingCalculating: "Pong! *calculando...*",
                ping: (ms) => `Pong! **${ms}ms**.`,
                // Premium Command
                premiumNo: (prefix) => `¡El servidor no tiene premium!\n\n¿Tienes una llave? Activa el premium en el servidor usando \`${prefix}premium [Llave]\`.`,
                premiumYes: (date) => `¡El servidor tiene premium! Hasta **${date}**\nPuedes usar comandos especiales con premium.`,
                premium: (date) => `¡Has mejorado el servidor! El servidor ahora tiene premium hasta el **${date}**.\nPuedes usar comandos especiales con premium.`,
                premiumInvalid: "La llave ingresada no es válida o está expirada.",
                // Prefix Command
                prefix: (prefix) => `Mi prefijo en este servidor es \`${prefix}\`.`,
                prefixChange: (prefix) => `Puedes cambiar el prefijo usando \`${prefix}prefix [Prefijo]\`.`,
                prefixChanged: (prefix) => `El prefijo en este servidor ha sido cambiado a \`${prefix}\`.`,
                // Language Command
                language: (language) => `El lenguaje actual del servidor es \`${language}\`.`,
                languageSupport: "Idioma soportados",
                languageActual: "Idioma actual",
                languageChange: (prefix) => `Puedes cambiar el idioma usando \`${prefix}language [Código de idioma]\`.`,
                languageChanged: (language) => `El idioma del servidor ahora es \`${language}\`.`,
                // Hug Command
                hug: (author, user) => `**${author}** ha abrazado a **${user}** ༼ つ ◕_◕ ༽つ`,
                hugBot: "No puedes abrazar a un bot.",
                // Slap Command
                slap: (author, user) => `**${author}** le dio una paliza a **${user}** ',:)`,
                slapBot: "No puedes darle una paliza a un bot.",
                // Pat Command
                pat: (author, user) => `**${author}** acarició a **${user}** ᓚᘏᗢ`,
                patBot: "No puedes acariciar a un bot.",
                // Kiss Command
                kiss: (author, user) => `**${author}** besó a **${user}** 🤍`,
                kissBot: "No puedes besar a un bot.",
                // Covid Command
                covidLastUpdate: "Última actualización",
                covidStatsGlobal: "Estadísticas del COVID19 globalmente",
                covidStatsCountry: (country) => `Estadísticas del COVID19 en ${country}`,
                covidCases: "Casos",
                covidRecovered: "Personas recuperadas",
                covidDeaths: "Personas fallecidas",
                covidError: "Ha ocurrido un error obteniendo información del COVID19",
                // Fortnite Command
                fortniteNo: "Debes colocar un nombre de usuario o `shop` para mostrar la tienda de hoy.",
                fortniteNoUser: "Debes colocar un nombre de usuario de Fortnite válido.",
                fortniteUserStats: (player, level) => `Estadisticas del jugador ${player} en Fortnite (Nivel: ${level})`,
                fortniteUserSolo: "Modo un jugador",
                fortniteUserDuo: "Modo duo",
                fortniteUserSquad: "Modo squad",
                fortniteUserWinrate: "Porcentaje de partidas ganadas",
                fortniteUserKD: "KD",
                fortniteUserKills: "Asesinatos",
                fortniteUserMinutes: "Minutos jugados",
                fortniteUserMatchs: "Partidas jugadas",
                fortniteShop: "Tienda diaria de Fortnite",
                fortniteShopDescription: "Descripción",
                fortniteShopType: "Tipo",
                fortniteShopRarity: "Raredad",
                fortniteShopPrice: "Precio",
                fortniteShopCurrency: "PaVos",
                fortniteShopItem: (current, max) => `Ítem ${current}/${max}`,
                fortniteError: "Ha ocurrido un error obteniendo información del jugador de Fortnite.",
                // Osu Command
                osuNoMode: "Debes colocar un modo válido (`normal`, `taiko`, `catch` o `mania`).",
                osuNoUser: "Debes colocar un nombre de usuario de osu! válido.",
                osuStats: (player, mode) => `Estadísticas del jugador ${player} en osu!${mode}`,
                osuCountry: "País",
                osuLevel: "Nivel",
                osuPP: "Puntos de rendimiento",
                osuAccuracy: "Precisión",
                osuTotalScore: "Puntuación total",
                osuScores: "Puntuaciones",
                // Say Command
                sayNo: "Debes colocar un texto válido para enviar.",
                // Roblox Command
                robloxNo: "Debes colocar un nombre de usuario de Roblox válido.",
                robloxId: (id) => `**ID**: ${id}`,
                robloxOnline: "En línea",
                robloxGroups: "Grupos",
                robloxFriends: "Amigos",
                robloxError: "Ha ocurrido un error obteniendo información del jugador de Roblox.",
                // Roles Command
                rolesNoOption: "Debes colocar una opción válida (`add` o `remove`).",
                rolesNoValid: "Debes colocar por lo menos un rol válido.",
                rolesPermisions: "Tu no puedes modificar los roles de ese miembro.",
                rolesNoneAdd: (user) => `Ningún rol ha sido añadido al miembro **${user}**.`,
                rolesNoneRemove: (user) => `Ningún rol ha sido eliminado del miembro **${user}**.`,
                rolesSingularAdd: (quantity, user) => `**${quantity}** rol fue añadido al miembro **${user}**.`,
                rolesSingularRemove: (quantity, user) => `**${quantity}** rol fue eliminado del miembro **${user}**.`,
                rolesPluralAdd: (quantity, user) => `**${quantity}** roles fueron añadidos al miembro **${user}**.`,
                rolesPluralRemove: (quantity, user) => `**${quantity}** roles fueron eliminados del miembro **${user}**.`,
                rolesError: "Ha ocurrido un error al cambiar los roles del miembro.",
                // Trump Command
                trumpNo: "Debes colocar un texto válido para escribir.",
                // Role Command
                roleNo: "Debes mencionar un rol, colocar su ID o nombre.",
                roleCreated: "Rol creado el",
                roleColor: "Color del rol",
                rolePermissions: "Permisos del rol",
                roleMembers: "Miembros con el rol",
                rolePosition: "Posición del rol",
                rolePositionNote: "de abajo hacia arriba",
                // Unban Command
                unbanNoUser: "Debes colocar la ID de un usuario válido.",
                unbanNo: "Ese usuario no está baneado en este servidor.",
                unban: (user) => `El usuario **${user}** ha sido desbaneado del servidor.`,
                unbanError: "Ha ocurrido un error al desbanear al usuario.",
                // MessageUpdate Event
                messageEdit: (user, id) => `**${user}** (${id}) ha editado un mensaje`,
                messageBefore: "Antes",
                messageAfter: "Después",
                messageEdited: "Mensaje Editado",
                // MessageDelete Event
                messageDelete: (user, id) => `El mensaje de **${user}** (${id}) ha sido eliminado`,
                messageDeleted: "Mensaje eliminado"
            }, constants: {
                permissions: {
                    default: "permisos por defecto",
                    ADMINISTRATOR: "administrador",
                    CREATE_INSTANT_INVITE: "crear invitación instantánea",
                    KICK_MEMBERS: "expulsar miembros",
                    BAN_MEMBERS: "banear miembros",
                    MANAGE_CHANNELS: "administrar canales",
                    MANAGE_GUILD: "administrar servidor",
                    ADD_REACTIONS: "añadir reacciones",
                    VIEW_AUDIT_LOG: "ver registro de auditoría",
                    PRIORITY_SPEAKER: "hablar prioritariamente",
                    STREAM: "transmitir",
                    VIEW_CHANNEL: "ver canal",
                    SEND_MESSAGES: "enviar mensajes",
                    SEND_TTS_MESSAGES: "enviar mensajes de texto a voz",
                    MANAGE_MESSAGES: "administrar mensajes",
                    EMBED_LINKS: "insertar enlaces",
                    ATTACH_FILES: "adjuntar archivos",
                    READ_MESSAGE_HISTORY: "leer el historial de mensjes",
                    MENTION_EVERYONE: "mencionar a todos",
                    USE_EXTERNAL_EMOJIS: "usar emojis externos",
                    VIEW_GUILD_INSIGHTS: "ver resúmen del servidor",
                    CONNECT: "conectar en canales de voz",
                    SPEAK: "hablar en canales de voz",
                    MUTE_MEMBERS: "silenciar miembros",
                    DEAFEN_MEMBERS: "ensordecer miembros",
                    MOVE_MEMBERS: "mover miembros",
                    USE_VAD: "usar la actividad de voz",
                    CHANGE_NICKNAME: "cambiar apodo",
                    MANAGE_NICKNAMES: "administrar apodos",
                    MANAGE_ROLES: "administrar roles",
                    MANAGE_WEBHOOKS: "administrar webhooks",
                    MANAGE_EMOJIS: "administrar emojis"
                },
                serverFeatures: {
                    ANIMATED_ICON: "ícono animado",
                    BANNER: "banner",
                    COMMERCE: "comercio",
                    DISCOVERABLE: "reconocible",
                    FEATURABLE: "destacable",
                    INVITE_SPLASH: "imagen de invitación",
                    NEWS: "noticias",
                    PARTNERED: "partnerizado",
                    PUBLIC: "público",
                    PUBLIC_DISABLED: "público desactivado",
                    VANITY_URL: "URL de vanidad",
                    VERIFIED: "verificado",
                    VIP_REGIONS: "regiones VIP",
                    WELCOME_SCREEN_ENABLED: "pantalla de bienvenida habilitada"
                },
                activities: {
                    PLAYING: "Jugando a",
                    STREAMING: "Transmitiendo",
                    LISTENING: "Escuchando",
                    WATCHING: "Viendo",
                    CUSTOM_STATUS: "Estado personalizado"
                },
                verificationLevels: {
                    NONE: "Sin restricciones.",
                    LOW: "Deben tener un correo electrónico verificado en su cuenta de Discord.",
                    MEDIUM: "Deben tener un correo electrónico verificado y estar registrados en Discord por más de 5 minutos.",
                    HIGH: "Deben tener un correo electrónico verificado, estar registrados en Discord por más de 5 minutos y ser un miembro de este servidor por más de 10 minutos.",
                    VERY_HIGH: "Deben tener un correo electrónico verificado, estar registrados en Discord por más de 5 minutos, ser un miembro de este servidor por más de 10 minutos y tener un teléfono verificado en su cuenta de Discord."
                },
                explicitContentFilter: {
                    DISABLED: "No analizar ningún contenido multimedia.",
                    MEMBERS_WITHOUT_ROLES: "Analizar el contenido multimedia de los miembros sin rol.",
                    ALL_MEMBERS: "Analizar el contenido multimedia de todos los miembros."
                },
                time: {
                    seconds: (seconds) => `${seconds} segundos`,
                    second: (second) => `${second} segundo`,
                    minutes: (minutes) => `${minutes} minutos`,
                    minute: (minute) => `${minute} minuto`,
                    hours: (hours) => `${hours} horas`,
                    hour: (hour) => `${hour} hora`,
                    days: (days) => `${days} días`,
                    day: (day) => `${day} día`,
                    weeks: (weeks) => `${weeks} semanas`,
                    week: (week) => `${week} semana`,
                    months: (months) => `${months} meses`,
                    month: (month) => `${month} mes`,
                    years: (years) => `${years} años`,
                    year: (year) => `${year} año`,
                    ago: (date) => `hace ${date}`,
                    within: (date) => `dentro de ${date}`,
                    elapsed: (time) => `Tiempo transcurrido: **${time}**.`,
                    left: (time) => `Tiempo restante: **${time}**.`,
                    now: "justo ahora"
                }
            }, help: {
                // Help Command
                title: "Ayuda",
                titleCommands: "Lista de comandos",
                description: (name, prefix, links) => `Hola, yo soy ${name}. Estoy aquí para ayudarte en todo lo que desees hacer, puedes obtener información del servidor y/o de usuarios, también puedes entretenerte bastante jugando juegos incorporados en mí con tus amigos o simplemente ejecutar la parte administrativa.\n\nMi prefijo en este servidor es \`${prefix}\` pero puedes mencionarme como remplazo al prefijo.\nPuedes encontrar diferentes categorías con los diferentes comandos que dispongo con el comando \`${prefix}commands\`, cada uno de estos empieza por el prefijo anteriormente mencionado.\n\n¿Deseas información más detallada de un comando? Utiliza \`${prefix}help [Comando]\`.\n\nEnlaces útiles: ${links}`,
                categories: ["Información", "Utilidad", "Entretenimiento", "Configuración", "Administración", "NSFW"],
                nsfw: "Usa este comando en un canal NSFW para ver los comandos NSFW.",
                footer: (count) => `${count} comandos disponibles`,
                usage: "Uso",
                aliases: "Alias",
                // Commands Description
                banDescription: "Banea un miembro por ID o mención, se puede agregar una razón.",
                softbanDescription: "Banea un miembro por ID o mención eliminando mensajes por días de antiguedad, una razón se puede agregar.",
                clearDescription: "Elimina mensajes de acuerdo a la cantidad especificada entre 1 y 100.",
                kickDescription: "Expulsa a un miembro, se puede agregar una razón.",
                muteDescription: "Mutea a un miembro sin límite de tiempo definido.",
                unmuteDescription: "Desmutea a un miembro ya muteado.",
                helpDescription: "Muestra este mensaje.",
                userDescription: "Muestra información detallada de un usuario.",
                serverDescription: "Muestra información detallada del servidor.",
                pingDescription: "Muestra la latencia del bot al responder y con el API de Discord.",
                prefixDescription: "Muestra y cambia la configuración del prefijo del servidor.",
                languageDescription: "Muestra y cambia la configuración del idioma del servidor.",
                avatarDescription: "Muestra el avatar de un miembro por ID, mención o el tuyo.",
                hugDescription: "Abraza a un usuario por ID o mención.",
                slapDescription: "Dale una paliza a un miembro por ID o mención.",
                patDescription: "Acaricia a un miembro por ID o mención.",
                kissDescription: "Besa a un miembro por ID o mención.",
                covid19Description: "Muestra información del COVID19 globalmente o de un país especificado.",
                fortniteDescription: "Muestra información de la tienda de hoy o un jugador de Fortnite.",
                osuDescription: "Muestra información de un jugador de osu!.",
                commandsDescription: "Muestra todos los comandos disponibles.",
                sayDescription: "El bot repetira lo que le indiques.",
                robloxDescription: "Muestra información de un jugador de Roblox.",
                rolesDescription: "Agrega o remueva uno o varios rol(es) a un miembro del servidor.",
                triggeredDescription: "Hace una imagen __***triggered***_ por medio del avatar de un usuario o una imagen adjunta.",
                trumpDescription: "Donald Trump escribe algo.",
                scaredDescription: "Alguien ve el avatar de alguien o una imagen adjuntada por ti y se asusta...",
                rainbowDescription: "Hace el avatar de un miembro o una imagen adjuntada por ti en un arcoíris.",
                roleDescription: "Muestra la información de un rol por nombre, mención o ID.",
                unbanDescription: "Desbanea un miembro por ID, se puede agregar una razón.",
                // Commands Usage
                banUsage: (prefix) => `${prefix}ban <Miembro> [Razón]\n${prefix}ban @Deivid\n${prefix}ban 123123123123123123 >:[`,
                softbanUsage: (prefix) => `${prefix}softban <Miembro> <Antiguedad de mensajes en días para eliminar> [Razón]\n${prefix}softban @Deivid 1\n${prefix}ban 123123123123123123 1 >:[`,
                clearUsage: (prefix) => `${prefix}clear <Cantidad 1-100>\n${prefix}clear 10`,
                kickUsage: (prefix) => `${prefix}kick <Miembro> [Razón]\n${prefix}kick @Someone\n${prefix}ban 123123123123123123 Estás haciendo spam? Sí? Bieen, expulsado.`,
                muteUsage: (prefix) => `${prefix}mute <Miembro>\n${prefix}mute @Free\n${prefix}mute 123123123123123123`,
                unmuteUsage: (prefix) => `${prefix}unmute <Miembro>\n${prefix}unmute @Free\n${prefix}unmute 123123123123123123`,
                helpUsage: (prefix) => `${prefix}help [Comando]`,
                userUsage: (prefix) => `${prefix}user`,
                serverUsage: (prefix) => `${prefix}server`,
                pingUsage: (prefix) => `${prefix}ping`,
                prefixUsage: (prefix) => `${prefix}prefix [Prefix]\n${prefix}prefix\n${prefix}prefix !`,
                languageUsage: (prefix) => `${prefix}language [Language]\n${prefix}language\n${prefix}language en`,
                avatarUsage: (prefix) => `${prefix}avatar <Miembro>\n${prefix}avatar @Free`,
                hugUsage: (prefix) => `${prefix}hug <Miembro>\n${prefix}hug @Deivid#045`,
                slapUsage: (prefix) => `${prefix}slap <Miembro>\n${prefix}slap @Free`,
                patUsage: (prefix) => `${prefix}pat <Miembro>\n${prefix}pat @Free`,
                kissUsage: (prefix) => `${prefix}kiss <Miembro>\n${prefix}kiss @Deivid`,
                covid19Usage: (prefix) => `${prefix}covid19 [País]\n${prefix}covid19\n${prefix}covid19 Mexico`,
                fortniteUsage: (prefix) => `${prefix}fortnite <shop|Jugador> [Objeto de tienda]\n${prefix}fortnite shop\n${prefix}fortnite shop 4\n${prefix}fortnite Drylotranz`,
                osuUsage: (prefix) => `${prefix}osu <normal|taiko|catch|mania> <Jugador>\n${prefix}osu normal Motxi`,
                commandsUsage: (prefix) => `${prefix}commands`,
                sayUsage: (prefix) => `${prefix}say <Texto>\n${prefix}say Competencia? No existe, soy el mejor`,
                robloxUsage: (prefix) => `${prefix}roblox [Jugador]\n${prefix}roblox Dlodian131`,
                rolesUsage: (prefix) => `${prefix}roles <Miembro> <remove|add> <Rol(es)>\n${prefix}roles @Free add @Miembro\n${prefix}roles 123123123123123123 add @Miembro\n${prefix}roles @Free remove @Miembro\n${prefix}roles 123123123123123123 remove @Miembro`,
                triggeredUsage: (prefix) => `${prefix}triggered [Miembro]\n${prefix}triggered\n${prefix}triggered @Motxi`,
                trumpUsage: (prefix) => `${prefix}trump <Texto>\n${prefix}trump Este es el mejor bot`,
                scaredUsage: (prefix) => `${prefix}scared [Miembro]\n${prefix}scared\n${prefix}scared @Free`,
                rainbowUsage: (prefix) => `${prefix}rainbow [Miembro]\n${prefix}rainbow\n${prefix}rainbow @Free`,
                roleUsage: (prefix) => `${prefix}role <Rol>\n${prefix}role @Miembro\n${prefix}role Administrador`,
                unbanUsage: (prefix) => `${prefix}unban <Usuario>\n${prefix}unban 123123123123123123`
            }
        });

        this.displayName = "spanish";
        this.nativeName = "español";
        this.languageCode = "es";
        this.flag = "🇪🇸";
    }
}
