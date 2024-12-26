✅ Voraussetzungen (Prerequisites) für den Micro:bit-Code

Damit der Code auf dem Micro:bit V2 ausgeführt werden kann, benötigst du Folgendes:

📦 Hardware:
	1.	Micro:bit V2
	•	Ein Micro:bit der zweiten Generation wird benötigt.
	2.	USB-Kabel (Micro-USB auf USB-A)
	•	Zum Übertragen des Codes vom PC auf den Micro:bit.
	3.	Externe LEDs oder Bauteile (optional)
	•	Pins P0, P1, P2: Diese Pins können LEDs oder andere Aktoren steuern.
	•	Widerstände (ca. 220 Ω): Zum Schutz der LEDs vor zu viel Strom.
	4.	Jumper Wires (Steckbrücken)
	•	Zum Verbinden der GPIO-Pins des Micro:bit mit den LEDs oder anderen Bauteilen.
	•	Männlich-zu-Weiblich (Male-to-Female) oder Männlich-zu-Männlich (Male-to-Male), je nach Aufbau.
	5.	Breadboard (Steckplatine)
	•	Zum einfachen Aufbau und Testen der Schaltung ohne Löten.
	6.	Stromversorgung (optional)
	•	2x AAA-Batterien mit Batteriefach (falls der Micro:bit nicht über USB betrieben wird).

💻 Software:
	1.	Micro:bit MakeCode-Editor
	•	MakeCode-Editor zum Schreiben und Kompilieren des Codes.
	2.	Micro:bit Treiber (Windows/Mac/Linux)
	•	Wird normalerweise automatisch installiert, wenn der Micro:bit angeschlossen wird.
	3.	Python-Editor (optional)
	•	Alternativ kannst du einen Python-Editor wie Mu-Editor verwenden, um den Code zu bearbeiten.

⚙️ Bibliotheken und Module:
	1.	Micro:bit Python-Umgebung
	•	Standardbibliothek für MicroPython auf dem Micro:bit.
	2.	music Bibliothek
	•	Wird für das Abspielen von Tönen verwendet.
	3.	pins Bibliothek
	•	Ermöglicht die Steuerung der GPIO-Pins (P0, P1, P2).
	4.	basic Bibliothek
	•	Für LED-Anzeigen und Verzögerungen (showString, pause, etc.).
	5.	input Bibliothek
	•	Ermöglicht die Erkennung von Tasten- und Logo-Ereignissen.

🛠️ Einrichtungsschritte:
	1.	Schließe den Micro:bit über USB an deinen PC an.
	2.	Öffne den MakeCode-Editor oder einen Python-Editor.
	3.	Kopiere den bereitgestellten Code in den Editor.
	4.	Kompiliere den Code und lade die .hex-Datei auf den Micro:bit hoch.
	5.	Trenne den Micro:bit vom PC und starte ihn neu, falls nötig.

🚦 Testen des Codes:
	•	Button A: LED an P2 einschalten.
	•	Button B: LED an P0 einschalten.
	•	Button A+B: LEDs blinken nacheinander.
	•	Logo-Touch (kurz): LEDs ausschalten.
	•	Logo-Touch (lang): LEDs an P0 und P2 einschalten.

------------------------------------------------------------------------------------------------------------

📑 Übersicht über den Micro:bit V2 Code

Hier sind die Funktionen und Tastenbelegungen aufgelistet, mit denen die LEDs gesteuert werden.

🔧 Funktionen

	1.	Logo-Touch-Event (Kurz gedrückt)
	•	Funktion: LEDs an Pin P0 und P2 ausschalten.
	•	Anzeige: „OFF“ wird angezeigt.
	•	Ton: Tiefer Ton (147 Hz).
 --------------------------------------------------
	2.	Button A gedrückt
	•	Funktion: LED an Pin P2 einschalten.
	•	Anzeige: Symbol „✔️“ und „ON“ wird angezeigt.
	•	Ton: Hoher Ton (698 Hz).
  --------------------------------------------------
	3.	Button B gedrückt
	•	Funktion: LED an Pin P0 einschalten.
	•	Anzeige: Symbol „✔️“ und „ON“ wird angezeigt.
	•	Ton: Hoher Ton (698 Hz).
  --------------------------------------------------
	4.	Buttons A + B gleichzeitig gedrückt
	•	Funktion: LEDs an Pin P0, P1 und P2 blinken nacheinander in einer Schleife (50 Wiederholungen).
	•	Anzeige: Symbol „👕“ wird angezeigt.
	•	Ton: Tiefer Ton (147 Hz).
  --------------------------------------------------
	5.	Logo-Touch-Event (Lange gedrückt)
	•	Funktion: LEDs an Pin P0 und P2 einschalten.
	•	Anzeige: Symbol „✔️“ und „ON“ wird angezeigt.
	•	Ton: Hoher Ton (698 Hz).
  --------------------------------------------------
	6.	Startsequenz (Self-Test)
	•	Funktion: LEDs an Pin P0 und P2 werden nacheinander eingeschaltet und getestet.
	•	Anzeige: „Self Test“ → „Ready“
	•	Ton: Wechsel zwischen hohem (698 Hz) und tiefem (147 Hz) Ton.





 Showcase:
![IMG_5423](https://github.com/user-attachments/assets/ae803c65-3eea-4879-83a2-1b587021ee92)

 

