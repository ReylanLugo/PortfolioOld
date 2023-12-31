export default function ConsoleHeader(): JSX.Element {
    return (<div className="d-flex" style={{alignItems: "center"}}>
    <p className="terminal-photo">{`
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░▒▓▓████████▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░▓▓███▓▓▓▓▓▓▓▓▓███▓▓▓░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░▓▓█▓▓▓▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▒▒▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▒▒▒▒▒▒▓▓▓▓▓▓▓▒▒▒▒▒▒░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▒▒▒▒▒▒▒░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▓░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▓▓▓▓▒░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▒░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░▒▒▒▓▓▓▓▓▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒░░░░░░░░░░
    ░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒░░░░░
    ░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒░░░
    ░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
    ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
    
    `}</p><div>
      <pre className="terminal-title">{`
    $$$$$$\\  $$\\                             $$\\                                         
   $$  __$$\\ $$ |                            $$ |                                        
   $$ /  $$ |$$$$$$$\\   $$$$$$\\  $$\\   $$\\ $$$$$$\\         $$$$$$\\$$$$\\   $$$$$$\\        
   $$$$$$$$ |$$  __$$\\ $$  __$$\\ $$ |  $$ |\\_$$  _|        $$  _$$  _$$\\ $$  __$$\\       
   $$  __$$ |$$ |  $$ |$$ /  $$ |$$ |  $$ |  $$ |          $$ / $$ / $$ |$$$$$$$$ |      
   $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |  $$ |$$\\       $$ | $$ | $$ |$$   ____|      
   $$ |  $$ |$$$$$$$  |\\$$$$$$  |\\$$$$$$  |  \\$$$$  |      $$ | $$ | $$ |\\$$$$$$$\\       
   \\__|  \\__|\\_______/  \\______/  \\______/    \\____/       \\__| \\__| \\__| \\_______|      
                                                                                         
                                                                                         
                                                                                         
   `}</pre>
   <p className="terminal-info">
   Reylan Lugo<br/>
   2 years of experience in web development<br/>
   <code>-help</code> displays a list of commands
   </p>
    </div>
    </div>);
}