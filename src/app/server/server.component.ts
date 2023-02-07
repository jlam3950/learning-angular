import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    boolTest: boolean = true;
    serverCreationStatus = 'no server was created';
    allowNewServer = false;
    serverCreated = false; 
    serverName = '';
    serverStatus = 'offline';

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    }

    onCreateServer(){
        this.serverCreated = true;
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    onUpdateServerName(event: any){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}