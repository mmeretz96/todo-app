import { Project, Storage } from "./data";
import "./ui";
import "./style.css";
import { init, loadProject } from "./ui";
Storage.addProject("Today", []);
Storage.addProject("Week", []);
Storage.addProject("Inbox", []);
Storage.projects[2].addTask("Do thing", undefined, true);
Storage.projects[2].addTask("Do things", undefined, false);
Storage.projects[2].addTask("Do thingss", undefined, true);
Storage.addProject("Project 1", []);
Storage.projects[3].addTask("Do other thing", undefined, false);

init();
loadProject("2");
