<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PortfolioController extends Controller
{
  public function index(){
    return response()->json($this->getProjects());
  }

  private function getProjects(){
      $projects = [];

      // Project: E-commerce
      $project = [
        'title' => 'E-commerce web application',
        'img' => 'p_ecommerce.png',
        'stack' => 'JavaScript, VueJs, Bootstrap, SASS, Laravel, PHP, MySQL'
      ];
      $project['desc'] = <<<SECTION_ECOMM
      <p>
        The multilingual application offers services and goods to customers.
        Along with front-end and back-end development, it was required to create
        a CMS for this site which, in addition to CRUD operations with site content,
        includes also inventory, service orders, and purchase orders management functions.
      </p>
SECTION_ECOMM;
      $projects[] = $project;

      // Project: Work Reporting System
      $project = [
        'title' => 'Jobs and Working Time Reporting System',
        'img' => 'p_system.png',
        'stack' => 'Android, Java, HTML, Bootstrap, CSS, PHP, MySQL'
      ];
      $project['desc'] = <<<SECTION_WRS
      <p>
        Using the system’s terminals, employees can distribute their work shift time between supervisors 
        they were working with, and supervisors can report the job tasks executed during their work shift. 
        Managers can access the system through internet browser to perform manipulations with data.
      </p>
      <p>
        So, the system’s software package is divided into three parts: Terminal Application running on Android OS, 
        Administrating Panel in the form of web application, and server-side program written 
        in PHP and connected with MySQL database.
      </p>
SECTION_WRS;
      $projects[] = $project;

      // Project: Android Game "Microbes Commander"
      $project = [
        'title' => 'Mobile Game “Microbes Commander”',
        'img' => 'p_game.png',
        'stack' => 'Android, Java, OpenGL ES, SQLite, Artificial Neural Networks'
      ];
      $project['desc'] = <<<SECTION_MC
      <p>
        The game where you rule a battle between microbes and white cells. Microorganisms have got 
        a neural net based AI engine with online evaluative learning (each action is evaluated and 
        the result is used for adjusting neural net weights), which acts like conditioned reflexes in living beings.
      </p>
SECTION_MC;
      $projects[] = $project;

      // Project: Excel tools
      $project = [
        'title' => 'Analytical Tools and Reports created in MS Excel',
        'img' => 'p_excel.png',
        'stack' => 'MS Excel, VBA, MS Query, Oracle, MSSQL'
      ];
      $project['desc'] = <<<SECTION_EXC
      <p>
        There are a lot of tools were created while I was working in ABB. Most of them operate with data 
        from Maximo database. Maximo is an enterprise application which was initially developed as 
        Computerized Maintenance Management System (CMMS) and then evolved into Enterprise Assets 
        Management System (EAM). It was used to track almost all business processes in the company - 
        from the work orders management and maintenance planning to the control of all inventory and 
        labor transactions. The financial aspect was only excluded and delegated to another system.
      </p>
      <p>Here is a list of some developed tools:</p>
      <ul>
        <li>Equipment Classification – makes calculations to divide plant equipment into classes of 
        criticality using Maximo data about maintenance costs, labor hours, and number of 
        failures for defined interval of time;</li>
        <li>Maintenance Activities – gathers data for preparing a monthly report about hours spent 
        on maintenance tasks, costs, and equipment problems;</li>
        <li>KPI Tool – provides a set of procedures to calculate Key Performance Indicators using data in Maximo;</li>
        <li>Hours Distribution – puts summarized working hours loaded from the database 
        into a table with grouping by cost centers and projects;</li>
        <li>Salary Base – makes calculations for each employee to define amount of payable hours and set rates;</li>
        <li>Planning Analysis Tool – processes the Maximo data to present information in tables 
        describing the quality of planning function in organizing the maintenance activities;</li>
        <li>Shutdown Works Report – executes several separate procedures to collect and process Maximo data 
        needed for presentation of results of production line repair works;</li>
        <li>Works Overview – constructs table for defined interval of time with information 
        about hours spent on work orders by each employee.</li>
      </ul>
SECTION_EXC;
      $projects[] = $project;

      return $projects;
    }
}
