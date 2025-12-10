<script setup>
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify'
import { useSpeechRecognition } from '@/composables/useSpeechRecognition';

// Importem el tema de Vuetify (black/light mode)
const theme = useTheme()

// Snackbar variables
const snackbar = ref(false);
const text = ref('Hello, Im a snackbar');

// Importem el composable amb la variable interimTranscript
const { isListening, transcript, error, start } = useSpeechRecognition();
const uiMessage = ref("Prem el botó per començar...");
const statusColor = ref("primary");

// Lògica de reacció a la veu
watch(transcript, (newText) => {
  const command = newText.toLowerCase().trim();
  
  if (command.includes('saluda')) {
    uiMessage.value = "Hola! Benvingut a l'aplicació.";
    statusColor.value = "success";
    alert("Hola!"); 
  } 
  else if (command.includes('ajuda')) {
    uiMessage.value = "Aquesta és una prova de concepte.";
    statusColor.value = "info";
  } 
  else if (command.includes('Tema')){
    uiMessage.value = "Canviar el tema.";
    statusColor.value = "info";
    theme.toggle();
  } 
   else if (command.includes('Esborra')){
      uiMessage.value  = "Prem el botó per començar...";
      statusColor.value = "primary";
  } 
  else {
    snackbarText.value = `Comanda no reconeguda: "${newText}"`;    
    snackbar.value = true;
    uiMessage.value = snackbarText.value;
    statusColor.value = "warning";
  }
});
</script>

<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card width="400" :color="statusColor" variant="tonal">
      <v-card-item>
        <v-card-title class="text-h5 text-center">Control per Veu</v-card-title>
      </v-card-item>
      
      <!-- Control del Tema (Dark/Light Mode) -->
      <v-container class="d-flex justify-center align-center fill-height">
        <v-btn @click="theme.toggle()"
          text="Toggle Light / Dark"
        ></v-btn>
      </v-container>

      <!-- SnackBar 
      <div class="text-center ma-2">
        <v-btn @click="snackbar = true">
        Open Snackbar
        </v-btn>
      <v-snackbar v-model="snackbar"> {{ text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false">
          Close
        </v-btn>
      </template> -->

      <v-card-text class="text-center py-4">
        <div class="mb-4">
          <v-icon 
            :icon="isListening ? 'mdi-microphone' : 'mdi-microphone-off'" 
            size="64"
            :class="{'text-red animate-pulse': isListening}"
          ></v-icon>
        </div>
        
        <p class="text-h6 font-weight-bold">{{ isListening ? 'Escoltant...' : 'En espera' }}</p>
        
        <!-- Debug visual per a l'alumne -->
        <p v-if="interimTranscript" class="text-caption text-grey">
            Detectant: {{ interimTranscript }}
        </p>
        
        <p class="mt-2 text-body-1">{{ uiMessage }}</p>
        
        <v-alert v-if="error" type="error" class="mt-3" density="compact">{{ error }}</v-alert>
      </v-card-text>

      <v-card-actions class="justify-center pb-4">
        <v-btn 
          variant="elevated" color="primary" size="large"
          @click="start" :disabled="isListening"
        >
          Escolta
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
.animate-pulse { animation: pulse 1.5s infinite; }
@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
