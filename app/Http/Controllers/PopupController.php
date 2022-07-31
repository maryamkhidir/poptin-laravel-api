<?php

namespace App\Http\Controllers;

use App\Models\Popup;
use Illuminate\Http\Request;

class PopupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Popup::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [ //inputs are not empty or null
            'popup_id' => 'required',
            'title' => 'required',
            'background' => 'required',
            'placeholder' => 'required',
            'button_text' => 'required',
            'footnote' => 'required',       
            'badgecolor' => 'required'
        ]);
  
        $popup = new Popup;
        $popup->popup_id = $request->input('popup_id');  
        $popup->title = $request->input('title');
        $popup->background = $request->input('background');
        $popup->placeholder = $request->input('placeholder');
        $popup->button_text = $request->input('button_text');
        $popup->footnote = $request->input('footnote');
        $popup->badgecolor = $request->input('badgecolor');

        $popup->save(); //storing values as an object

        return $popup; //returns the stored value if the operation was successful.
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Popup::where('popup_id', $id)->firstOrFail();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [ // the new values should not be null
            'popup_id' => 'required',
            'title' => 'required',
            'background' => 'required',
            'placeholder' => 'required',
            'button_text' => 'required',
            'footnote' => 'required',       
            'badgecolor' => 'required'
        ]);
  
        $popup = Popup::findorFail($id); // uses the id to search values that need to be updated.
        $popup->popup_id = $request->input('popup_id');  
        $popup->title = $request->input('title');
        $popup->background = $request->input('background');
        $popup->placeholder = $request->input('placeholder');
        $popup->button_text = $request->input('button_text');
        $popup->footnote = $request->input('footnote');
        $popup->badgecolor = $request->input('badgecolor');

        $popup->save();//saves the values in the database. The existing data is overwritten.
        return $popup; // retrieves the updated object from the database
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $popup = Popup::findorFail($id); //searching for object in database using ID
        if($popup->delete()){ //deletes the object
          return 'deleted successfully'; //shows a message when the delete operation was successful.
        }
    }
}
