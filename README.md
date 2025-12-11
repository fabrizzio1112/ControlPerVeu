# DeepWiki Q&A with Code Context for Repository: fabrizzio1112/ControlPerVeu
## Q1
Hazme el README estas son las especificaciones:
Títol: Activitat 4: Documentació Professional d'un Projecte.

Context: Un projecte sense documentació és un projecte incomplet. Una bona documentació facilita la col·laboració amb altres desenvolupadors i permet als usuaris entendre com funciona el nostre software.

Objectius d'Aprenentatge:

Estructurar i redactar un fitxer README.md de qualitat professional.

Escriure una guia senzilla per a un usuari final no tècnic.

Requisits / Tasques:

Tria una de les activitats anteriors (la 2 o la 3) com a base per a la documentació.

Crea un fitxer README.md professional. Ha d'incloure, com a mínim, les següents seccions:

Títol i descripció breu del projecte.

Tecnologies Utilitzades.

Instruccions d'Instal·lació i Execució (com posar-lo en marxa en local).

Descripció de l'ús bàsic de l'aplicació.

Crea un document a part anomenat MANUAL_USUARI.pdf (màxim 1 pàgina). Aquest document ha d'explicar, amb un llenguatge molt senzill i captures de pantalla si cal, com un usuari final pot utilitzar l'aplicació.
### Answer
# Activitat 4: Documentació Professional d'un Projecte

## Voice Commander - Control per Veu amb Electron i Vue

Una aplicació d'escriptori multiplataforma que permet controlar la interfície mitjançant comandes de veu en català. Desenvolupada amb Electron, Vue 3 i Vuetify per oferir una experiència d'usuari moderna i intuïtiva. ControlPerVeu:59-59 

### 🚀 Característiques Principals

- **Reconeixement de veu en català**: Utilitza la Web Speech API del navegador per processar comandes vocals ControlPerVeu:18-18 
- **Interfície Material Design**: Components moderns amb Vuetify 3
- **Multiplataforma**: Disponible per Windows, macOS i Linux ControlPerVeu:49-57 
- **Mode fosc/clar**: Canvi de tema mitjançant comanda de veu
- **Desenvolupament ràpid**: Hot reload amb Vite durant el desenvolupament

### 🛠️ Tecnologies Utilitzades

| Tecnologia | Versió | Propòsit |
|------------|--------|----------|
| **Electron** | ^39.2.6 | Entorn d'aplicació d'escriptori ControlPerVeu:26-26  |
| **Vue 3** | ^3.5.21 | Framework frontend reactiu ControlPerVeu:18-18  |
| **Vuetify** | ^3.10.1 | Biblioteca de components Material Design ControlPerVeu:20-20  |
| **Vite** | ^7.1.5 | Eina de construcció i servidor de desenvolupament ControlPerVeu:34-34  |
| **Vue Router** | ^4.5.1 | Sistema d'enrutament ControlPerVeu:19-19  |

### 📋 Requisits del Sistema

- **Node.js** 18 o superior
- **npm** o **yarn** com a gestor de paquets
- **Microfon** per al reconeixement de veu
- **Sistema operatiu**: Windows 10+, macOS 10.15+, o Linux

### 📦 Instal·lació

1. **Clona el repositori**:
   ```bash
   git clone https://github.com/fabrizzio1112/ControlPerVeu.git
   cd ControlPerVeu
   ```

2. **Instal·la les dependències**:
   ```bash
   npm install
   ```

### 🏃‍♂️ Execució

#### Mode Desenvolupament

Per executar l'aplicació en mode desenvolupament amb hot reload: ControlPerVeu:12-12 

```bash
npm run electron:dev
```

Aquest comandament inicia simultàniament:
- El servidor de desenvolupament de Vite a `http://localhost:3000` ControlPerVeu:8-8 
- L'aplicació Electron amb DevTools obert ControlPerVeu:27-29 

#### Mode Producció

Per construir l'aplicació per a distribució: ControlPerVeu:13-13 

```bash
npm run electron:build
```

Els executables es generaran a la carpeta `release/` ControlPerVeu:41-43 .

### 🎤 Ús Bàsic de l'Aplicació

1. **Inicia l'aplicació** i permet l'accés al micròfon (especialment a macOS) ControlPerVeu:21-24 

2. **Fes clic al botó "Escolta"** per activar el reconeixement de veu ControlPerVeu:101-106 

3. **Pronuncia una de les comandes disponibles**:
   - **"saluda"** - Mostra un missatge de benvinguda ControlPerVeu:22-26 
   - **"ajuda"** - Mostra informació d'ajuda ControlPerVeu:27-30 
   - **"Tema"** - Canvia entre mode fosc i clar ControlPerVeu:31-35 
   - **"Esborra"** - Netetja la pantalla i reinicia l'estat ControlPerVeu:36-39 

4. **L'estat de l'aplicació** es mostra visualment amb colors i icones:
   - 🎤 **Micròfon vermell parpellejant**: L'aplicació està escoltant
   - 🔇 **Micròfon apagat**: En espera de noves comandes

### 🏗️ Estructura del Projecte

```
ControlPerVeu/
├── electron/                 # Scripts d'Electron
│   ├── main.js              # Procés principal
│   └── preload.cjs          # Script de preload
├── src/                     # Codi font Vue
│   ├── components/          # Components Vue
│   │   └── VoiceCommander.vue
│   ├── composables/         # Composables Vue
│   │   └── useSpeechRecognition.js
│   ├── pages/               # Pàgines (enrutament)
│   ├── plugins/             # Plugins (Vuetify, Router)
│   └── main.js              # Entrada de l'aplicació
├── package.json             # Dependències i scripts
├── vite.config.mjs          # Configuració de Vite
└── README.md               # Aquest document
```

### 🔧 Comandes de Desenvolupament

| Comandament | Descripció |
|-------------|------------|
| `npm run dev` | Inicia només el servidor Vite ControlPerVeu:8-8  |
| `npm run electron:dev` | Executa en mode desenvolupament ControlPerVeu:12-12  |
| `npm run build` | Construeix l'aplicació Vue ControlPerVeu:9-9  |
| `npm run electron:build` | Crea executables per distribució ControlPerVeu:13-13  |
| `npm run lint` | Analitza i corregeix el codi ControlPerVeu:11-11  |

### 🐛 Resolució de Problemes

#### El micròfon no funciona
- Assegura't que el micròfon està connectat i funcionant
- Verifica els permisos del micròfon a la configuració del sistema
- A macOS, l'aplicació sol·licitarà permís automàticament ControlPerVeu:21-24 

#### L'aplicació no s'inicia en mode desenvolupament
- Comprova que el port 3000 no estigui en ús
- Assegura't que totes les dependències estan instal·lades amb `npm install`
- Verifica que Node.js 18+ està instal·lat

#### Les comandes de veu no es reconeixen
- Parla clarament i en català
- Assegura't que hi ha silenci ambiental
- Comprova que el micròfon està seleccionat com a dispositiu d'entrada per defecte

### 📄 Llicència

Aquest projecte està sota llicència ISC ControlPerVeu:62-62 .

---

**Nota**: Per al MANUAL_USUARI.pdf, he de informar-te que actualment no puc generar fitxers PDF. No obstant això, pots crear un document senzill amb captures de pantalla de la interfície mostrant:
1. La pantalla principal amb el botó "Escolta"
2. L'estat "Escoltant..." amb el micròfon actiu
3. Exemples de respostes a les comandes "saluda", "Tema", etc.

## Notes
Aquest README està basat en l'Activitat 3 (Control per Veu) i compleix amb els requisits de l'Activitat 4 de Documentació Professional. El projecte utilitza arquitectura multi-procés d'Electron amb Vue 3 com a framework frontend i Vuetify per als components d'interfície. El sistema de reconeixement de veu està implementat mitjançant la Web Speech API del navegador, configurada específicament per al català. ControlPerVeu:10-20 

Wiki pages you might want to explore:
- [Home (fabrizzio1112/ControlPerVeu)](/wiki/fabrizzio1112/ControlPerVeu#1)
- [Development Mode (fabrizzio1112/ControlPerVeu)](/wiki/fabrizzio1112/ControlPerVeu#2.2)
### Citations
**File:** package.json (L8-8)
```json
    "dev": "vite",
```
**File:** package.json (L9-9)
```json
    "build": "vite build",
```
**File:** package.json (L11-11)
```json
    "lint": "eslint . --fix",
```
**File:** package.json (L12-12)
```json
    "electron:dev": "concurrently \"npm run dev\" \"wait-on http://localhost:3000 && cross-env NODE_ENV=development electron .\"",
```
**File:** package.json (L13-13)
```json
    "electron:build": "npm run build && electron-builder"
```
**File:** package.json (L18-18)
```json
    "vue": "^3.5.21",
```
**File:** package.json (L19-19)
```json
    "vue-router": "^4.5.1",
```
**File:** package.json (L20-20)
```json
    "vuetify": "^3.10.1"
```
**File:** package.json (L26-26)
```json
    "electron": "^39.2.6",
```
**File:** package.json (L34-34)
```json
    "vite": "^7.1.5",
```
**File:** package.json (L41-43)
```json
    "directories": {
      "output": "release"
    },
```
**File:** package.json (L49-57)
```json
    "win": {
      "target": "nsis"
    },
    "mac": {
      "target": "dmg"
    },
    "linux": {
      "target": "AppImage"
    }
```
**File:** package.json (L59-59)
```json
  "description": "Voice Commander - Control por voz con Electron y Vue",
```
**File:** package.json (L62-62)
```json
  "license": "ISC"
```
**File:** src/composables/useSpeechRecognition.js (L10-20)
```javascript
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!Recognition) {
    error.value = "API no suportada en aquest navegador/entorn.";
    return { isListening, transcript, interimTranscript, error, start: () => {}, stop: () => {} };
  }

  const recognition = new Recognition();
  recognition.lang = 'ca-ES'; 
  recognition.continuous = false; // S'atura després d'una frase
  recognition.interimResults = true; // IMPORTANT: Permet veure resultats parcials
```
**File:** electron/main.js (L21-24)
```javascript
  // Solicitar permisos de micrófono en macOS
  if (process.platform === 'darwin') {
    systemPreferences.askForMediaAccess('microphone');
  }
```
**File:** electron/main.js (L27-29)
```javascript
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
```
**File:** src/components/VoiceCommander.vue (L22-26)
```vue
  if (command.includes('saluda')) {
    uiMessage.value = "Hola! Benvingut a l'aplicació.";
    statusColor.value = "success";
    alert("Hola!"); 
  } 
```
**File:** src/components/VoiceCommander.vue (L27-30)
```vue
  else if (command.includes('ajuda')) {
    uiMessage.value = "Aquesta és una prova de concepte.";
    statusColor.value = "info";
  } 
```
**File:** src/components/VoiceCommander.vue (L31-35)
```vue
  else if (command.includes('Tema')){
    uiMessage.value = "Canviar el tema.";
    statusColor.value = "info";
    theme.toggle();
  } 
```
**File:** src/components/VoiceCommander.vue (L36-39)
```vue
   else if (command.includes('Esborra')){
      uiMessage.value  = "Prem el botó per començar...";
      statusColor.value = "primary";
  } 
```
**File:** src/components/VoiceCommander.vue (L101-106)
```vue
        <v-btn 
          variant="elevated" color="primary" size="large"
          @click="start" :disabled="isListening"
        >
          Escolta
        </v-btn>
```
## Q2
Hazme el README estas son las especificaciones:
Títol: Activitat 4: Documentació Professional d'un Projecte.

Context: Un projecte sense documentació és un projecte incomplet. Una bona documentació facilita la col·laboració amb altres desenvolupadors i permet als usuaris entendre com funciona el nostre software.

Objectius d'Aprenentatge:

Estructurar i redactar un fitxer README.md de qualitat professional.

Escriure una guia senzilla per a un usuari final no tècnic.

Requisits / Tasques:

Tria una de les activitats anteriors (la 2 o la 3) com a base per a la documentació.

Crea un fitxer README.md professional. Ha d'incloure, com a mínim, les següents seccions:

Títol i descripció breu del projecte.

Tecnologies Utilitzades.

Instruccions d'Instal·lació i Execució (com posar-lo en marxa en local).

Descripció de l'ús bàsic de l'aplicació.

Crea un document a part anomenat MANUAL_USUARI.pdf (màxim 1 pàgina). Aquest document ha d'explicar, amb un llenguatge molt senzill i captures de pantalla si cal, com un usuari final pot utilitzar l'aplicació.
## ControlPerVeu - Sistema de Control per Veu amb Electron i Vue
Aquest codemap traça el flux complet del sistema de control per veu ControlPerVeu, des de la inicialització d'Electron fins al processament de comandes de veu en català. El sistema utilitza l'API Web Speech del navegador [3a] amb configuració específica per al català, integrada en una aplicació d'escriptori amb Electron [1a] i Vue 3 [2a]. Les comandes es processen mitjançant un observer pattern [3d] que reacciona als canvis en el transcript de veu per executar accions com canviar el tema [4c] o mostrar missatges [4d].
### 1. Inicialització de l'Aplicació Electron
Com s'inicia l'aplicació d'escriptori i es configura la finestra principal amb permisos de micròfon
### 1a. Arranc de l'aplicació (`main.js:40`)
Electron espera que estigui llest i crea la finestra principal
```text
app.whenReady().then(createWindow)
```
### 1b. Sol·licitud de permisos (`main.js:23`)
Demana permisos de micròfon automàticament a macOS
```text
systemPreferences.askForMediaAccess('microphone')
```
### 1c. Càrrega del contingut (`main.js:28`)
Carrega l'aplicació Vue des del servidor de desenvolupament
```text
mainWindow.loadURL('http://localhost:3000')
```
### 2. Bootstrap de l'Aplicació Vue
Com s'inicialitza Vue 3 amb Vuetify i el sistema d'enrutament
### 2a. Creació de l'aplicació Vue (`main.js:19`)
Instància l'aplicació Vue amb el component principal
```text
const app = createApp(App)
```
### 2b. Registre de plugins (`main.js:21`)
Registra Vuetify i Vue Router
```text
registerPlugins(app)
```
### 2c. Muntatge de l'aplicació (`main.js:23`)
Munta l'aplicació al DOM
```text
app.mount('#app')
```
### 3. Processament de Comandes de Veu
Com l'aplicació reconeix i processa les comandes de veu en català
### 3a. Configuració d'idioma (`useSpeechRecognition.js:18`)
Configura el reconeixement per a català
```text
recognition.lang = 'ca-ES'
```
### 3b. Resultats parcials (`useSpeechRecognition.js:20`)
Permet veure el text mentre es parla
```text
recognition.interimResults = true
```
### 3c. Actualització del transcript (`useSpeechRecognition.js:64`)
Actualitza el text reconegut quan és final
```text
if (finalChunk) transcript.value = finalChunk
```
### 3d. Observador de canvis (`VoiceCommander.vue:19`)
Vigila els canvis en el transcript per processar comandes
```text
watch(transcript, (newText) => {
```
### 3e. Processament de comandes (`VoiceCommander.vue:22`)
Evalua les comandes reconegudes i executa accions
```text
if (command.includes('saluda')) {
```
### 4. Interacció d'Usuari i Estat Visual
Com l'usuari interactua amb la interfície i com es mostra l'estat del sistema
### 4a. Botó d'escolta (`VoiceCommander.vue:103`)
Botó que activa el reconeixement de veu
```text
@click="start" :disabled="isListening"
```
### 4b. Icona d'estat (`VoiceCommander.vue:82`)
Canvia la icona segons si està escoltant
```text
:icon="isListening ? 'mdi-microphone' : 'mdi-microphone-off'"
```
### 4c. Canvi de tema (`VoiceCommander.vue:34`)
Canvia entre mode fosc i clar per comanda de veu
```text
theme.toggle()
```
### 4d. Missatge de resposta (`VoiceCommander.vue:23`)
Mostra missatges de confirmació a l'usuari
```text
uiMessage.value = "Hola! Benvingut a l'aplicació."
```
### 5. Configuració de Desenvolupament
Com es configura l'entorn de desenvolupament amb Vite i les eines de construcció
### 5a. Script de desenvolupament (`package.json:12`)
Executa Vite i Electron simultàniament
```text
"electron:dev": "concurrently \"npm run dev\" \"wait-on http://localhost:3000 && cross-env NODE_ENV=development electron .\""
```
### 5b. Configuració base (`vite.config.mjs:39`)
Configuració important per al funcionament amb Electron
```text
base: './'
```
### 5c. Història hash (`index.js:12`)
Utilitza hash routing per compatibilitat amb Electron
```text
history: createWebHashHistory(import.meta.env.BASE_URL)
```
