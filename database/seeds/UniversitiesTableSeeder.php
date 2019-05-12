<?php

use Illuminate\Database\Seeder;

class UniversitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('universities')->insert([
            'id'            => 1,
            'name'          => 'University of Jordan',
            'country_id'    => 1,
            
        ]);
        DB::table('universities')->insert([
            'id'            => 2,
            'name'          => 'Hashemite University',
            'country_id'    => 1,
            
        ]);
        DB::table('universities')->insert([
            'id'            => 3,
            'name'          => 'King Saud University',
            'country_id'    => 2,
            
        ]);
        DB::table('universities')->insert([
            'id'            => 4,
            'name'          => 'King Fahed University',
            'country_id'    => 2,
            
        ]);
        DB::table('universities')->insert([
            'id'            => 5,
            'name'          => 'Harvard University',
            'country_id'    => 3,
            
        ]);
        DB::table('universities')->insert([
            'id'            => 6,
            'name'          => 'MIT',
            'country_id'    => 3,
            
        ]);
       
    }
}
