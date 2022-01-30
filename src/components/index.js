import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "./ChatList";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Home } from "../routes/Home";
import { Chats } from "../routes/Chats";
import { Profile } from "../routes/Profile";
import { Messages } from "../routes/Messages";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColums: "200px 1fr"
    }
});

export const Format = () => {
    return (
        <div>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Button to="/" component={Link} color="inherit">
                            Home
                        </Button>
                        <Button to="/Profile" component={Link} color="inherit">
                            Profile
                        </Button>

                        <Button to="/Chats" component={Link} color="inherit">
                            Chats
                        </Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact component={Chats} path="/chats" />
                    <Route exact component={Messages} path="/chats/:chatId" />
                    <Route exact component={Profile} path="/profile" />
                    <Route exact component={Home} path="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
