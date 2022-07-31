<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePopupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('popups', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('popup_id');
            $table->string('title');
            $table->string('placeholder');
            $table->string('button_text');
            $table->string('footnote');
            $table->string('badgeColor');
            $table->string('backgroundcolor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('popups');
    }
}
