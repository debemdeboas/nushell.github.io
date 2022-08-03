import{_ as t,o as d,c as u,a as l,b as o,d as n,r as s}from"./app.5afaa2be.js";const r={},c=l("h1",{id:"vergleich-zu-bash",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#vergleich-zu-bash","aria-hidden":"true"},"#"),n(" Vergleich zu Bash")],-1),i=l("p",null,"Hinweis: Diese Tabelle geht von Nu 0.59 oder neuer aus.",-1),a=l("thead",null,[l("tr",null,[l("th",null,"Bash"),l("th",null,"Nu"),l("th",null,"Funktion")])],-1),h=l("tr",null,[l("td",null,[l("code",null,"ls")]),l("td",null,[l("code",null,"ls")]),l("td",null,"Auflisten der Dateien des aktuellen Pfads")],-1),_=l("tr",null,[l("td",null,[l("code",null,"ls <dir>")]),l("td",null,[l("code",null,"ls <dir>")]),l("td",null,"Auflisten der Dateien am angegebenen Pfad")],-1),g=l("tr",null,[l("td",null,[l("code",null,"ls pattern*")]),l("td",null,[l("code",null,"ls pattern*")]),l("td",null,"Auflisten von Dateien, die dem gegebenen Schema/Pattern folgen")],-1),m=l("tr",null,[l("td",null,[l("code",null,"ls -la")]),l("td",null,[l("code",null,"ls --long --all"),n(" or "),l("code",null,"ls -la")]),l("td",null,"Auflisten aller Dateien (inklusive versteckte) mit allen verf\xFCgbaren Informationen")],-1),p=l("tr",null,[l("td",null,[l("code",null,"ls -d */")]),l("td",null,[l("code",null,"ls | where type == Dir")]),l("td",null,"Auflisten von Ordnern")],-1),f=l("tr",null,[l("td",null,[l("code",null,"find . -name *.rs")]),l("td",null,[l("code",null,"ls **/*.rs")]),l("td",null,"Rekursives auflisten aller Dateien, die zum gegebenen Schema/Pattern passen")],-1),b=l("tr",null,[l("td",null,[l("code",null,"cd <directory>")]),l("td",null,[l("code",null,"cd <directory>")]),l("td",null,"Wechseln an den angegebenen Pfad")],-1),v=l("tr",null,[l("td",null,[l("code",null,"cd")]),l("td",null,[l("code",null,"cd")]),l("td",null,"Wechseln in den HOME-Ordner")],-1),A=l("tr",null,[l("td",null,[l("code",null,"cd -")]),l("td",null,[l("code",null,"cd -")]),l("td",null,"Wechseln an den vorherigen Pfad")],-1),k=l("tr",null,[l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"Erzeugen des angegebenen Pfads")],-1),O=l("tr",null,[l("td",null,[l("code",null,"mkdir -p <path>")]),l("td",null,[l("code",null,"mkdir <path>")]),l("td",null,"Erzeugen des angegebenen Pfads und weiterer Ordner wenn n\xF6tig")],-1),P=l("tr",null,[l("td",null,[l("code",null,"touch test.txt")]),l("td",null,[l("code",null,"touch test.txt")]),l("td",null,"Erstellen einer Datei")],-1),D=l("tr",null,[l("td",null,[l("code",null,"> <path>")]),l("td",null,[l("code",null,"| save <path>")]),l("td",null,"Speichern eines String in eine Datei")],-1),B=l("tr",null,[l("td",null,[l("code",null,">> <path>")]),l("td",null,[l("code",null,"| save --append <path>")]),l("td",null,"Anh\xE4ngen eines Strings an eine Datei")],-1),z=l("tr",null,[l("td",null,[l("code",null,"cat <path>")]),l("td",null,[l("code",null,"open --raw <path>")]),l("td",null,"Einlesen des Inhalts der angegebenen Datei (in Textform)")],-1),x=l("tr",null,[l("td"),l("td",null,[l("code",null,"open <path>")]),l("td",null,"Einlesen einer Datei in Form von strukturierten Daten")],-1),w=l("tr",null,[l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,[l("code",null,"mv <source> <dest>")]),l("td",null,"Bewegen einer Datei an einen neuen Ort")],-1),S=l("tr",null,[l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,[l("code",null,"cp <source> <dest>")]),l("td",null,"Kopieren einer Datei an einen Ort")],-1),F=l("tr",null,[l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,[l("code",null,"cp -r <source> <dest>")]),l("td",null,"Kopieren eines Ordners an einen Ort (rekursiv)")],-1),T=l("tr",null,[l("td",null,[l("code",null,"rm <path>")]),l("td",null,[l("code",null,"rm <path>")]),l("td",null,"Entfernen der angegebenen Datei")],-1),E=l("tr",null,[l("td"),l("td",null,[l("code",null,"rm -t <path>")]),l("td",null,"Angegebene Datei in den Papierkorb des Systems werfen")],-1),H=l("tr",null,[l("td",null,[l("code",null,"rm -rf <path>")]),l("td",null,[l("code",null,"rm -r <path>")]),l("td",null,"Entfernen des angegebenen Pfads rekursiv")],-1),$=l("tr",null,[l("td",null,[l("code",null,"chmod")]),l("td",null,[l("code",null,"<Noch nicht m\xF6glich>")]),l("td",null,"\xC4ndern von Dateiattributen")],-1),N=l("td",null,[l("code",null,"date -d <date>")],-1),U=l("td",null,[l("code",null,'"<date>" | into datetime -f <format>')],-1),y=n("Datum ausgeben ("),R={href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"},V=n("Dokumentation des Formats"),I=n(")"),W=l("tr",null,[l("td",null,[l("code",null,"sed")]),l("td",null,[l("code",null,"str find-replace")]),l("td",null,"Suchen und ersetzen eines Pattern in einem String")],-1),K=l("tr",null,[l("td",null,[l("code",null,"grep <pattern>")]),l("td",null,[l("code",null,"where $it =~ <substring>"),n(" or "),l("code",null,"find <substring>")]),l("td",null,"Filtern von Strings die den Substring beinhalten")],-1),L=l("tr",null,[l("td",null,[l("code",null,"man <command>")]),l("td",null,[l("code",null,"help <command>")]),l("td",null,"Hilfe zu einem Befehl ansehen")],-1),C=l("tr",null,[l("td"),l("td",null,[l("code",null,"help commands")]),l("td",null,"Alle verf\xFCgbaren Befehle anzeigen")],-1),M=l("tr",null,[l("td"),l("td",null,[l("code",null,"help --find <string>")]),l("td",null,"Nach einem Text in allen verf\xFCgbaren Befehlen suchen")],-1),Z=l("tr",null,[l("td",null,[l("code",null,"command1 && command2")]),l("td",null,[l("code",null,"command1; command2")]),l("td",null,"Ausf\xFChren eines Befehls und wenn Ausf\xFChrung erfolgreich wird ein weiterer Befehl ausgef\xFChrt")],-1),j=l("tr",null,[l("td",null,[l("code",null,"stat $(which git)")]),l("td",null,[l("code",null,"stat (which git).path")]),l("td",null,"Ausgabe eines Befehls als Eingabe f\xFCr einen anderen Befehl verwenden")],-1),q=l("tr",null,[l("td",null,[l("code",null,"echo $PATH")]),l("td",null,[l("code",null,"echo $env.PATH")]),l("td",null,"Aktuelle PATH-Variable anzeigen")],-1),G=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"PATH permanent \xE4ndern")],-1),J=l("tr",null,[l("td",null,[l("code",null,"export PATH = $PATH:/usr/other/bin")]),l("td",null,[l("code",null,"let-env PATH = ($env.PATH | append /usr/other/bin)")]),l("td",null,"PATH tempor\xE4r \xE4ndern")],-1),Q=l("tr",null,[l("td",null,[l("code",null,"export")]),l("td",null,[l("code",null,"echo $env")]),l("td",null,"Anzeigen der aktuellen Umgebungsvariablen")],-1),X=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"Umgebungsvariablen permanent \xE4ndern")],-1),Y=l("tr",null,[l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,[l("code",null,"FOO=BAR ./bin")]),l("td",null,"Umgebungsvariablen tempor\xE4r \xE4ndern")],-1),ll=l("tr",null,[l("td",null,[l("code",null,"export FOO=BAR")]),l("td",null,[l("code",null,"let-env FOO = BAR")]),l("td",null,"Umgebungsvariable f\xFCr aktuelle Sitzung setzen")],-1),nl=l("tr",null,[l("td",null,[l("code",null,"echo $FOO")]),l("td",null,[l("code",null,"echo $env.FOO")]),l("td",null,"Umgebungsvariablen nutzen")],-1),el=l("tr",null,[l("td",null,[l("code",null,"unset FOO")]),l("td",null,[l("code",null,"hide FOO")]),l("td",null,"Umgebungsvariable f\xFCr aktuelle Sitzung verbergen")],-1),tl=l("tr",null,[l("td",null,[l("code",null,'alias s="git status -sb"')]),l("td",null,[l("code",null,"alias s = git status -sb")]),l("td",null,"Alias tempor\xE4r definieren")],-1),dl=l("tr",null,[l("td",null,[l("code",null,"<update ~/.bashrc>")]),l("td",null,[l("code",null,"vim $nu.config-path")]),l("td",null,"Alias permanent hinzuf\xFCgen und \xE4ndern (f\xFCr neue Shells)")],-1),ul=l("tr",null,[l("td",null,[l("code",null,"bash -c <commands>")]),l("td",null,[l("code",null,"nu -c <commands>")]),l("td",null,"Ausf\xFChren einer Pipeline an Befehlen (ben\xF6tigt 0.9.1 oder neuer)")],-1),ol=l("tr",null,[l("td",null,[l("code",null,"bash <script file>")]),l("td",null,[l("code",null,"nu <script file>")]),l("td",null,"Ausf\xFChren einer Skriptdatei (ben\xF6tigt 0.9.1 oder neuer)")],-1),sl=l("tr",null,[l("td",null,[l("code",null,"\\")]),l("td",null,[l("code",null,"("),n(" gefolgt von "),l("code",null,")")]),l("td",null,"Fortsetzen von Zeilen")],-1);function rl(cl,il){const e=s("ExternalLinkIcon");return d(),u("div",null,[c,i,l("table",null,[a,l("tbody",null,[h,_,g,m,p,f,b,v,A,k,O,P,D,B,z,x,w,S,F,T,E,H,$,l("tr",null,[N,U,l("td",null,[y,l("a",R,[V,o(e)]),I])]),W,K,L,C,M,Z,j,q,G,J,Q,X,Y,ll,nl,el,tl,dl,ul,ol,sl])])])}var hl=t(r,[["render",rl],["__file","von_bash_kommend.html.vue"]]);export{hl as default};