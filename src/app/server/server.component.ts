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

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer(){
        this.serverCreationStatus = 'Server was created';
    }
}