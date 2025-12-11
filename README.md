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
