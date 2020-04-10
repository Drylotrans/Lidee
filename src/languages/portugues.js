const Language = require("../structures/Language");

module.exports = class Spanish extends Language {
    constructor() {
        super({
            // Global
            userNo: "Debes mencionar un usuario o colocar su ID.",
            userPerms: (permission) => `Você deve ter permissão de \`${this.getConstant("permissions", permission)}\` para executar este comando.`,
            botPerms: (permission) => `Eu devo ter permissão \`${this.getConstant("permissions", permission)}\`  para executar este comando.`,
            nsfwChannel: "Este comando está disponível apenas nos canais NSFW.",
            cooldown: (time) => `Você deve esperar ${time} para executar este comando.`,
            premiumOnly: "O servidor deve ter premium para executar este comando.",
            others: (number) => `e outros ${number} mais...`,
            roles: (number) => `Roles (${number})`,
            id: (id) => `ID: ${id}`,
            nothing: "Nada para mostrar...",
            // Ban Command
            banNo: "Não posso banir esse membro.",
            ban: (member) => `O membro **${member}** foi banido do servidor.`,
            banError: "Ocorreu um erro ao banir o membro.",
            // Clear Command
            clearNumber: "Você deve especificar quantas mensagens você deseja excluir.",
            clearLimit: "Você deve especificar um número entre 0 e 100.",
            clear: (number) => `${number} mensagens foram excluídas.`,
            clearError: "Ocorreu um erro ao excluir mensagens.",
            // Kick Command
            kickNo: "Não posso expulsar esse membro.",
            kick: (member) => `O membro **${member}** foi expulsado do servidor.`,
            kickError: "Ocorreu um erro ao expulsar o membro.",
            // Mute Command
            muteNo: "¡Esse membro já está mutado!",
            mute: (member) => `O membro **${member}** foi mutado do servidor.`,
            // Unmute Command
            unmuteNo: "¡Ese miembro no está muteado!",
            unmute: (member) => `El miembro **${member}** ha sido desmuteado del servidor.`,
            // User Command
            userPermissions: "Permisos de usuario",
            userCreated: "Cuenta creada el",
            userJoined: "Entró al servidor el",
            userActivity: "Actividad de usuario",
            userBoosting: "Boosteando desde",
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
            // Ping Command
            pingCalculating: "Pong! *calculando...*",
            ping: (ms) => `Pong! **${ms}ms**.`,
            // Premium Command
            premiumNo: (prefix) => `¡El servidor no tiene premium!\n\n¿Tienes una llave? Activa el premium en el servidor usando \`${prefix}premium [Llave]\`.`,
            premiumYes: `¡El servidor tiene premium!\nPuedes usar comandos especiales con premium.`,
            premium: `¡Has mejorado el servidor! El servidor ahora tiene premium.\nPuedes usar comandos especiales con premium.`,
            premiumInvalid: "La llave ingresada no es valida o está expirada.",
            // Prefix Command
            prefix: (prefix) => `Mi prefijo en este servidor es \`${prefix}\`.`,
            prefixChange: (prefix) => `Puedes cambiar el prefijo usando \`${prefix}prefix [Prefijo]\`.`,
            prefixChanged: (prefix) => `El prefijo en este servidor ha sido cambiado a \`${prefix}\`.`,
            // Language Command
            languageSupport: "Idioma soportados",
            languageActual: "Idioma actual",
            languageChange: (prefix) => `Puedes cambiar el idioma usando \`${prefix}language [Código de idioma]\`.`,
            languageChanged: (language) => `El idioma del servidor ahora es \`${language}\`.`,
            // Avatar Command
            avatar: "Enlace con máxima resolución",
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
            covidToday: "Nuevos casos de hoy",
            covidTodayRecovered: "Nuevas personas recuperadas hoy",
            covidTodayDeaths: "Nuevas personas fallecidas hoy",
            covidTotal: "Casos en total",
            covidTotalRecovered: "Personas recuperadas en total",
            covidTotalDeaths: "Personas fallecidas en total",
            // Fortnite Command
            fortniteStats: (player, level) => `Estadisticas del jugador ${player} (Nivel: ${level})`,
            fortniteSingle: "Modo un jugador",
            fortniteDouble: "Modo duo",
            fortniteSquad: "Modo squad",
            fortniteWinrate: "Porcentaje de partidas",
            fortniteKD: "KD",
            fortniteKills: "Asesinatos",
            fortniteTotalMins: "Minutos jugados",
            fortniteTotalsMatchs: "Partidas jugadas"
        }, {
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
                ANIMATED_ICON: "icono animado",
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
                elapsed: (time) => `Tiempo transcurrido: **${time}**.`,
                left: (time) => `Tiempo restante: **${time}**.`
            }
        }, {
            // Help Command
            title: `Ayuda`,
            description: (name, prefix, links) => `Hola, yo soy ${name}. Estoy aquí para ayudarte en todo lo que desees hacer, puedes obtener información del servidor y/o de usuarios, también puedes entretenerte bastante jugando juegos incorporados en mí con tus amigos o simplemente ejecutar la parte administrativa.\n\nMi prefijo en este servidor es \`${prefix}\` pero puedes mencionarme como remplazo al prefijo.\nAbajo encontrarás diferentes categorías con los diferentes comandos que dispongo, cada uno de estos empieza por el prefijo anteriormente mencionado.\n\n¿Deseas información más detallada de un comando? Utiliza \`${prefix}help [Comando]\`.\n\nEnlaces útiles: ${links}`,
            categories: ["Información", "Entretenimiento", "Interacción", "Configuración", "Administración", "NSFW"],
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
            premiumDescription: "Muestra y establece la configuración premium del servidor.",
            avatarDescription: "Muestra el avatar de un miembro por ID, mención o el tuyo.",
            hugDescription: "Abraza a un usuario por ID o mención.",
            slapDescription: "Dale una paliza a un miembro por ID o mención.",
            patDescription: "Acaricia a un miembro por ID o mención.",
            kissDescription: "Besa a un miembro por ID o mención.",
            forniteDescription: "Obten estadisticas de un jugador de Fortnite",
            // Commands Usage
            banUsage: (prefix) => `${prefix}ban <Miembro> [Razón]\n${prefix}ban @Deivid#0045\n${prefix}ban 123123123123123123 >:[`,
            softbanUsage: (prefix) => `${prefix}softban <Miembro> [Razón] [Antiguedad de mensajes en días para eliminar]\n${prefix}softban @Deivid#0045\n${prefix}ban 123123123123123123 >:[`,
            clearUsage: (prefix) => `${prefix}clear <Cantidad 1-100>\n${prefix}clear 10`,
            kickUsage: (prefix) => `${prefix}kick <Miembro> [Razón]\n${prefix}kick @Someone#0001\n${prefix}ban 123123123123123123 Estás haciendo spam? Sí? Bieen, expulsado.`,
            muteUsage: (prefix) => `${prefix}mute <Miembro>\n${prefix}mute @Free#7870\n${prefix}mute 123123123123123123`,
            unmuteUsage: (prefix) => `${prefix}unmute <Miembro>\n${prefix}unmute @Free#7870\n${prefix}unmute 123123123123123123`,
            helpUsage: (prefix) => `${prefix}help [Comando]`,
            userUsage: (prefix) => `${prefix}user`,
            serverUsage: (prefix) => `${prefix}server`,
            pingUsage: (prefix) => `${prefix}ping`,
            prefixUsage: (prefix) => `${prefix}prefix [Prefix]\n${prefix}prefix !`,
            languageUsage: (prefix) => `${prefix}language [Language]\n${prefix}language en`,
            premiumUsage: (prefix) => `${prefix}premium [Key]\n${prefix}premium 237A2C3A58374`,
            avatarUsage: (prefix) => `${prefix}avatar <Miembro>\n${prefix}avatar @Free#7870`,
            hugUsage: (prefix) => `${prefix}hug <Miembro>\n${prefix}hug @Deivid#045`,
            slapUsage: (prefix) => `${prefix}slap <Miembro>\n${prefix}slap @Free#7870`,
            patUsage: (prefix) => `${prefix}pat <Miembro>\n${prefix}pat @Free#7870`,
            kissUsage: (prefix) => `${prefix}kiss <Miembro>\n${prefix}kiss @Deivid#0045`,
            fortniteUsage: (prefix) => `${prefix}fortnite <Miembro>\n${prefix}fortnite Ninja`
        });

        this.displayName = "spanish";
        this.nativeName = "español";
        this.languageCode = "es";
        this.flag = "🇪🇸";
    }
}