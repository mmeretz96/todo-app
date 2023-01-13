import { Project, Storage } from "./data";
import "./ui";
import "./style.css";
import { init, loadProject } from "./ui";

Storage.addProject("Inbox", []);
Storage.projects[0].addTask("Do thing", undefined, true);
Storage.projects[0].addTask("Do things", undefined, false);
Storage.projects[0].addTask("Do thingss", undefined, true);
Storage.addProject("Project 1", []);
Storage.projects[1].addTask("Do other thing", undefined, false);

init();
loadProject("0");
