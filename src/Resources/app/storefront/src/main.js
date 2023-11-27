import ThreesixtyViewer from "./threesixty-viewer/threesitxy-viewer.plugin";

const PluginManager = window.PluginManager;

PluginManager.register('ThreesixtyViewer', ThreesixtyViewer, 'data-threesixty-viewer');