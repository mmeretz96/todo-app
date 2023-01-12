import { Project, Storage } from "./data";
import "./ui";
import "./style.css";
import { init, loadProject } from "./ui";

Storage.addProject("Inbox", []);
Storage.projects[0].addTask("Do thing", "today", true);
Storage.projects[0].addTask("Do things", "today", false);
Storage.projects[0].addTask("Do thingss", "today", true);
Storage.addProject("Project 1", []);
Storage.projects[1].addTask("Do other thing", "today", false);

init();
loadProject("0");
