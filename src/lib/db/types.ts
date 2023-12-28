//Try not to manually change this file. If you need to update the types,
//generate them in the Supabase dashboard:
//https://supabase.com/dashboard/project/zrfupzyytvnaavkuhhtq/api?page=tables-intro

//Place any custom types you want to use in /index.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Makes: {
        Row: {
          id: number;
          make: string;
        };
        Insert: {
          id?: number;
          make: string;
        };
        Update: {
          id?: number;
          make?: string;
        };
        Relationships: [];
      };
      Models: {
        Row: {
          id: number;
          make: string;
          model: string;
        };
        Insert: {
          id?: number;
          make: string;
          model: string;
        };
        Update: {
          id?: number;
          make?: string;
          model?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'Models_make_fkey';
            columns: ['make'];
            isOneToOne: false;
            referencedRelation: 'Makes';
            referencedColumns: ['make'];
          }
        ];
      };
      Products: {
        Row: {
          bannerimage: string | null;
          bannerimage_m: string | null;
          color_code_pe_bkgr_str: string | null;
          color_code_pe_bkrd_str: string | null;
          color_code_pp_bkgr_2to: string | null;
          color_code_pp_bkgr_str: string | null;
          color_code_pp_bkrd_2to: string | null;
          color_code_pp_bkrd_str: string | null;
          color_code_pp_grbk_str: string | null;
          color_code_pp_grbk_tri: string | null;
          color_code_ps_gr_1to: string | null;
          color_code_sp_gr_1to: string | null;
          color_code_ss_gr_1to: string | null;
          color_url_pe_bkgr_str: string | null;
          color_url_pe_bkrd_str: string | null;
          color_url_pp_bkgr_2to: string | null;
          color_url_pp_bkgr_str: string | null;
          color_url_pp_bkrd_2to: string | null;
          color_url_pp_bkrd_str: string | null;
          color_url_pp_grbk_str: string | null;
          color_url_pp_grbk_tri: string | null;
          color_url_ps_gr_1to: string | null;
          color_url_sp_gr_1to: string | null;
          color_url_ss_gr_1to: string | null;
          cover_type_pe_bkgr_str: string | null;
          cover_type_pe_bkrd_str: string | null;
          cover_type_pp_bkgr_2to: string | null;
          cover_type_pp_bkgr_str: string | null;
          cover_type_pp_bkrd_2to: string | null;
          cover_type_pp_bkrd_str: string | null;
          cover_type_pp_grbk_str: string | null;
          cover_type_pp_grbk_tri: string | null;
          cover_type_ps_gr_1to: string | null;
          cover_type_sp_gr_1to: string | null;
          cover_type_ss_gr_1to: string | null;
          default_make_images: string | null;
          default_model_images: string | null;
          display_color_pe_bkgr_str: string | null;
          display_color_pe_bkrd_str: string | null;
          display_color_pp_bkgr_2to: string | null;
          display_color_pp_bkgr_str: string | null;
          display_color_pp_bkrd_2to: string | null;
          display_color_pp_bkrd_str: string | null;
          display_color_pp_grbk_str: string | null;
          display_color_pp_grbk_tri: string | null;
          display_color_ps_gr_1to: string | null;
          display_color_sp_gr_1to: string | null;
          display_color_ss_gr_1to: string | null;
          display_id_pe_bkgr_str: string | null;
          display_id_pe_bkrd_str: string | null;
          display_id_pp_bkgr_2to: string | null;
          display_id_pp_bkgr_str: string | null;
          display_id_pp_bkrd_2to: string | null;
          display_id_pp_bkrd_str: string | null;
          display_id_pp_grbk_str: string | null;
          display_id_pp_grbk_tri: string | null;
          display_id_ps_gr_1to: string | null;
          display_id_sp_gr_1to: string | null;
          display_id_ss_gr_1to: string | null;
          display_quantity_pe_bkgr_str: string | null;
          display_quantity_pe_bkrd_str: string | null;
          display_quantity_pp_bkgr_2to: string | null;
          display_quantity_pp_bkgr_str: string | null;
          display_quantity_pp_bkrd_2to: string | null;
          display_quantity_pp_bkrd_str: string | null;
          display_quantity_pp_grbk_str: string | null;
          display_quantity_pp_grbk_tri: string | null;
          display_quantity_ps_gr_1to: string | null;
          display_quantity_sp_gr_1to: string | null;
          display_quantity_ss_gr_1to: string | null;
          feature_pe_bkgr_str: string | null;
          feature_pe_bkrd_str: string | null;
          feature_pp_bkgr_2to: string | null;
          feature_pp_bkgr_str: string | null;
          feature_pp_bkrd_2to: string | null;
          feature_pp_bkrd_str: string | null;
          feature_pp_grbk_str: string | null;
          feature_pp_grbk_tri: string | null;
          feature_ps_gr_1to: string | null;
          feature_sp_gr_1to: string | null;
          feature_ss_gr_1to: string | null;
          fk: number;
          Generation: string | null;
          listpage_gallery_image: string | null;
          make: string | null;
          make_id: number | null;
          mirror: string | null;
          model: string | null;
          model_id: string | null;
          msrp_pe_bkgr_str: string | null;
          msrp_pe_bkrd_str: string | null;
          msrp_pp_bkgr_2to: string | null;
          msrp_pp_bkgr_str: number | null;
          msrp_pp_bkrd_2to: string | null;
          msrp_pp_bkrd_str: string | null;
          msrp_pp_grbk_str: string | null;
          msrp_pp_grbk_tri: string | null;
          msrp_ps_gr_1to: number | null;
          msrp_sp_gr_1to: number | null;
          msrp_ss_gr_1to: number | null;
          OR: string | null;
          price_pe_bkgr_str: string | null;
          price_pe_bkrd_str: string | null;
          price_pp_bkgr_2to: string | null;
          price_pp_bkgr_str: number | null;
          price_pp_bkrd_2to: string | null;
          price_pp_bkrd_str: string | null;
          price_pp_grbk_str: string | null;
          price_pp_grbk_tri: string | null;
          price_ps_gr_1to: number | null;
          price_sp_gr_1to: string | null;
          price_ss_gr_1to: string | null;
          product_pe_bkgr_str: string | null;
          product_pe_bkrd_str: string | null;
          product_pp_bkgr_2to: string | null;
          product_pp_bkgr_str: string | null;
          product_pp_bkrd_2to: string | null;
          product_pp_bkrd_str: string | null;
          product_pp_grbk_str: string | null;
          product_pp_grbk_tri: string | null;
          product_ps_gr_1to: string | null;
          product_sp_gr_1to: string | null;
          product_ss_gr_1to: string | null;
          quantity_pe_bkgr_str: string | null;
          quantity_pe_bkrd_str: string | null;
          quantity_pp_bkgr_2to: string | null;
          quantity_pp_bkgr_str: string | null;
          quantity_pp_bkrd_2to: string | null;
          quantity_pp_bkrd_str: string | null;
          quantity_pp_grbk_str: string | null;
          quantity_pp_grbk_tri: string | null;
          quantity_ps_gr_1to: string | null;
          quantity_sp_gr_1to: string | null;
          quantity_ss_gr_1to: string | null;
          Size: string | null;
          SKU_pe_bkgr_str: string | null;
          SKU_pe_bkrd_str: string | null;
          SKU_pp_bkgr_2to: string | null;
          SKU_pp_bkgr_str: string | null;
          SKU_pp_bkrd_2to: string | null;
          SKU_pp_bkrd_str: string | null;
          SKU_pp_grbk_str: string | null;
          SKU_pp_grbk_tri: string | null;
          SKU_ps_gr_1to: string | null;
          SKU_sp_gr_1to: string | null;
          SKU_ss_gr_1to: string | null;
          sub1_id: string | null;
          sub2_id: string | null;
          sub3_id: string | null;
          submodel1: string | null;
          submodel2: string | null;
          submodel3: string | null;
          type: string | null;
          uc_description: string | null;
          uc_image_link: string | null;
          uc_title: string | null;
          year_generation: string | null;
          year_id: string | null;
          year_options: string | null;
        };
        Insert: {
          bannerimage?: string | null;
          bannerimage_m?: string | null;
          color_code_pe_bkgr_str?: string | null;
          color_code_pe_bkrd_str?: string | null;
          color_code_pp_bkgr_2to?: string | null;
          color_code_pp_bkgr_str?: string | null;
          color_code_pp_bkrd_2to?: string | null;
          color_code_pp_bkrd_str?: string | null;
          color_code_pp_grbk_str?: string | null;
          color_code_pp_grbk_tri?: string | null;
          color_code_ps_gr_1to?: string | null;
          color_code_sp_gr_1to?: string | null;
          color_code_ss_gr_1to?: string | null;
          color_url_pe_bkgr_str?: string | null;
          color_url_pe_bkrd_str?: string | null;
          color_url_pp_bkgr_2to?: string | null;
          color_url_pp_bkgr_str?: string | null;
          color_url_pp_bkrd_2to?: string | null;
          color_url_pp_bkrd_str?: string | null;
          color_url_pp_grbk_str?: string | null;
          color_url_pp_grbk_tri?: string | null;
          color_url_ps_gr_1to?: string | null;
          color_url_sp_gr_1to?: string | null;
          color_url_ss_gr_1to?: string | null;
          cover_type_pe_bkgr_str?: string | null;
          cover_type_pe_bkrd_str?: string | null;
          cover_type_pp_bkgr_2to?: string | null;
          cover_type_pp_bkgr_str?: string | null;
          cover_type_pp_bkrd_2to?: string | null;
          cover_type_pp_bkrd_str?: string | null;
          cover_type_pp_grbk_str?: string | null;
          cover_type_pp_grbk_tri?: string | null;
          cover_type_ps_gr_1to?: string | null;
          cover_type_sp_gr_1to?: string | null;
          cover_type_ss_gr_1to?: string | null;
          default_make_images?: string | null;
          default_model_images?: string | null;
          display_color_pe_bkgr_str?: string | null;
          display_color_pe_bkrd_str?: string | null;
          display_color_pp_bkgr_2to?: string | null;
          display_color_pp_bkgr_str?: string | null;
          display_color_pp_bkrd_2to?: string | null;
          display_color_pp_bkrd_str?: string | null;
          display_color_pp_grbk_str?: string | null;
          display_color_pp_grbk_tri?: string | null;
          display_color_ps_gr_1to?: string | null;
          display_color_sp_gr_1to?: string | null;
          display_color_ss_gr_1to?: string | null;
          display_id_pe_bkgr_str?: string | null;
          display_id_pe_bkrd_str?: string | null;
          display_id_pp_bkgr_2to?: string | null;
          display_id_pp_bkgr_str?: string | null;
          display_id_pp_bkrd_2to?: string | null;
          display_id_pp_bkrd_str?: string | null;
          display_id_pp_grbk_str?: string | null;
          display_id_pp_grbk_tri?: string | null;
          display_id_ps_gr_1to?: string | null;
          display_id_sp_gr_1to?: string | null;
          display_id_ss_gr_1to?: string | null;
          display_quantity_pe_bkgr_str?: string | null;
          display_quantity_pe_bkrd_str?: string | null;
          display_quantity_pp_bkgr_2to?: string | null;
          display_quantity_pp_bkgr_str?: string | null;
          display_quantity_pp_bkrd_2to?: string | null;
          display_quantity_pp_bkrd_str?: string | null;
          display_quantity_pp_grbk_str?: string | null;
          display_quantity_pp_grbk_tri?: string | null;
          display_quantity_ps_gr_1to?: string | null;
          display_quantity_sp_gr_1to?: string | null;
          display_quantity_ss_gr_1to?: string | null;
          feature_pe_bkgr_str?: string | null;
          feature_pe_bkrd_str?: string | null;
          feature_pp_bkgr_2to?: string | null;
          feature_pp_bkgr_str?: string | null;
          feature_pp_bkrd_2to?: string | null;
          feature_pp_bkrd_str?: string | null;
          feature_pp_grbk_str?: string | null;
          feature_pp_grbk_tri?: string | null;
          feature_ps_gr_1to?: string | null;
          feature_sp_gr_1to?: string | null;
          feature_ss_gr_1to?: string | null;
          fk: number;
          Generation?: string | null;
          listpage_gallery_image?: string | null;
          make?: string | null;
          make_id?: number | null;
          mirror?: string | null;
          model?: string | null;
          model_id?: string | null;
          msrp_pe_bkgr_str?: string | null;
          msrp_pe_bkrd_str?: string | null;
          msrp_pp_bkgr_2to?: string | null;
          msrp_pp_bkgr_str?: number | null;
          msrp_pp_bkrd_2to?: string | null;
          msrp_pp_bkrd_str?: string | null;
          msrp_pp_grbk_str?: string | null;
          msrp_pp_grbk_tri?: string | null;
          msrp_ps_gr_1to?: number | null;
          msrp_sp_gr_1to?: number | null;
          msrp_ss_gr_1to?: number | null;
          OR?: string | null;
          price_pe_bkgr_str?: string | null;
          price_pe_bkrd_str?: string | null;
          price_pp_bkgr_2to?: string | null;
          price_pp_bkgr_str?: number | null;
          price_pp_bkrd_2to?: string | null;
          price_pp_bkrd_str?: string | null;
          price_pp_grbk_str?: string | null;
          price_pp_grbk_tri?: string | null;
          price_ps_gr_1to?: number | null;
          price_sp_gr_1to?: string | null;
          price_ss_gr_1to?: string | null;
          product_pe_bkgr_str?: string | null;
          product_pe_bkrd_str?: string | null;
          product_pp_bkgr_2to?: string | null;
          product_pp_bkgr_str?: string | null;
          product_pp_bkrd_2to?: string | null;
          product_pp_bkrd_str?: string | null;
          product_pp_grbk_str?: string | null;
          product_pp_grbk_tri?: string | null;
          product_ps_gr_1to?: string | null;
          product_sp_gr_1to?: string | null;
          product_ss_gr_1to?: string | null;
          quantity_pe_bkgr_str?: string | null;
          quantity_pe_bkrd_str?: string | null;
          quantity_pp_bkgr_2to?: string | null;
          quantity_pp_bkgr_str?: string | null;
          quantity_pp_bkrd_2to?: string | null;
          quantity_pp_bkrd_str?: string | null;
          quantity_pp_grbk_str?: string | null;
          quantity_pp_grbk_tri?: string | null;
          quantity_ps_gr_1to?: string | null;
          quantity_sp_gr_1to?: string | null;
          quantity_ss_gr_1to?: string | null;
          Size?: string | null;
          SKU_pe_bkgr_str?: string | null;
          SKU_pe_bkrd_str?: string | null;
          SKU_pp_bkgr_2to?: string | null;
          SKU_pp_bkgr_str?: string | null;
          SKU_pp_bkrd_2to?: string | null;
          SKU_pp_bkrd_str?: string | null;
          SKU_pp_grbk_str?: string | null;
          SKU_pp_grbk_tri?: string | null;
          SKU_ps_gr_1to?: string | null;
          SKU_sp_gr_1to?: string | null;
          SKU_ss_gr_1to?: string | null;
          sub1_id?: string | null;
          sub2_id?: string | null;
          sub3_id?: string | null;
          submodel1?: string | null;
          submodel2?: string | null;
          submodel3?: string | null;
          type?: string | null;
          uc_description?: string | null;
          uc_image_link?: string | null;
          uc_title?: string | null;
          year_generation?: string | null;
          year_id?: string | null;
          year_options?: string | null;
        };
        Update: {
          bannerimage?: string | null;
          bannerimage_m?: string | null;
          color_code_pe_bkgr_str?: string | null;
          color_code_pe_bkrd_str?: string | null;
          color_code_pp_bkgr_2to?: string | null;
          color_code_pp_bkgr_str?: string | null;
          color_code_pp_bkrd_2to?: string | null;
          color_code_pp_bkrd_str?: string | null;
          color_code_pp_grbk_str?: string | null;
          color_code_pp_grbk_tri?: string | null;
          color_code_ps_gr_1to?: string | null;
          color_code_sp_gr_1to?: string | null;
          color_code_ss_gr_1to?: string | null;
          color_url_pe_bkgr_str?: string | null;
          color_url_pe_bkrd_str?: string | null;
          color_url_pp_bkgr_2to?: string | null;
          color_url_pp_bkgr_str?: string | null;
          color_url_pp_bkrd_2to?: string | null;
          color_url_pp_bkrd_str?: string | null;
          color_url_pp_grbk_str?: string | null;
          color_url_pp_grbk_tri?: string | null;
          color_url_ps_gr_1to?: string | null;
          color_url_sp_gr_1to?: string | null;
          color_url_ss_gr_1to?: string | null;
          cover_type_pe_bkgr_str?: string | null;
          cover_type_pe_bkrd_str?: string | null;
          cover_type_pp_bkgr_2to?: string | null;
          cover_type_pp_bkgr_str?: string | null;
          cover_type_pp_bkrd_2to?: string | null;
          cover_type_pp_bkrd_str?: string | null;
          cover_type_pp_grbk_str?: string | null;
          cover_type_pp_grbk_tri?: string | null;
          cover_type_ps_gr_1to?: string | null;
          cover_type_sp_gr_1to?: string | null;
          cover_type_ss_gr_1to?: string | null;
          default_make_images?: string | null;
          default_model_images?: string | null;
          display_color_pe_bkgr_str?: string | null;
          display_color_pe_bkrd_str?: string | null;
          display_color_pp_bkgr_2to?: string | null;
          display_color_pp_bkgr_str?: string | null;
          display_color_pp_bkrd_2to?: string | null;
          display_color_pp_bkrd_str?: string | null;
          display_color_pp_grbk_str?: string | null;
          display_color_pp_grbk_tri?: string | null;
          display_color_ps_gr_1to?: string | null;
          display_color_sp_gr_1to?: string | null;
          display_color_ss_gr_1to?: string | null;
          display_id_pe_bkgr_str?: string | null;
          display_id_pe_bkrd_str?: string | null;
          display_id_pp_bkgr_2to?: string | null;
          display_id_pp_bkgr_str?: string | null;
          display_id_pp_bkrd_2to?: string | null;
          display_id_pp_bkrd_str?: string | null;
          display_id_pp_grbk_str?: string | null;
          display_id_pp_grbk_tri?: string | null;
          display_id_ps_gr_1to?: string | null;
          display_id_sp_gr_1to?: string | null;
          display_id_ss_gr_1to?: string | null;
          display_quantity_pe_bkgr_str?: string | null;
          display_quantity_pe_bkrd_str?: string | null;
          display_quantity_pp_bkgr_2to?: string | null;
          display_quantity_pp_bkgr_str?: string | null;
          display_quantity_pp_bkrd_2to?: string | null;
          display_quantity_pp_bkrd_str?: string | null;
          display_quantity_pp_grbk_str?: string | null;
          display_quantity_pp_grbk_tri?: string | null;
          display_quantity_ps_gr_1to?: string | null;
          display_quantity_sp_gr_1to?: string | null;
          display_quantity_ss_gr_1to?: string | null;
          feature_pe_bkgr_str?: string | null;
          feature_pe_bkrd_str?: string | null;
          feature_pp_bkgr_2to?: string | null;
          feature_pp_bkgr_str?: string | null;
          feature_pp_bkrd_2to?: string | null;
          feature_pp_bkrd_str?: string | null;
          feature_pp_grbk_str?: string | null;
          feature_pp_grbk_tri?: string | null;
          feature_ps_gr_1to?: string | null;
          feature_sp_gr_1to?: string | null;
          feature_ss_gr_1to?: string | null;
          fk?: number;
          Generation?: string | null;
          listpage_gallery_image?: string | null;
          make?: string | null;
          make_id?: number | null;
          mirror?: string | null;
          model?: string | null;
          model_id?: string | null;
          msrp_pe_bkgr_str?: string | null;
          msrp_pe_bkrd_str?: string | null;
          msrp_pp_bkgr_2to?: string | null;
          msrp_pp_bkgr_str?: number | null;
          msrp_pp_bkrd_2to?: string | null;
          msrp_pp_bkrd_str?: string | null;
          msrp_pp_grbk_str?: string | null;
          msrp_pp_grbk_tri?: string | null;
          msrp_ps_gr_1to?: number | null;
          msrp_sp_gr_1to?: number | null;
          msrp_ss_gr_1to?: number | null;
          OR?: string | null;
          price_pe_bkgr_str?: string | null;
          price_pe_bkrd_str?: string | null;
          price_pp_bkgr_2to?: string | null;
          price_pp_bkgr_str?: number | null;
          price_pp_bkrd_2to?: string | null;
          price_pp_bkrd_str?: string | null;
          price_pp_grbk_str?: string | null;
          price_pp_grbk_tri?: string | null;
          price_ps_gr_1to?: number | null;
          price_sp_gr_1to?: string | null;
          price_ss_gr_1to?: string | null;
          product_pe_bkgr_str?: string | null;
          product_pe_bkrd_str?: string | null;
          product_pp_bkgr_2to?: string | null;
          product_pp_bkgr_str?: string | null;
          product_pp_bkrd_2to?: string | null;
          product_pp_bkrd_str?: string | null;
          product_pp_grbk_str?: string | null;
          product_pp_grbk_tri?: string | null;
          product_ps_gr_1to?: string | null;
          product_sp_gr_1to?: string | null;
          product_ss_gr_1to?: string | null;
          quantity_pe_bkgr_str?: string | null;
          quantity_pe_bkrd_str?: string | null;
          quantity_pp_bkgr_2to?: string | null;
          quantity_pp_bkgr_str?: string | null;
          quantity_pp_bkrd_2to?: string | null;
          quantity_pp_bkrd_str?: string | null;
          quantity_pp_grbk_str?: string | null;
          quantity_pp_grbk_tri?: string | null;
          quantity_ps_gr_1to?: string | null;
          quantity_sp_gr_1to?: string | null;
          quantity_ss_gr_1to?: string | null;
          Size?: string | null;
          SKU_pe_bkgr_str?: string | null;
          SKU_pe_bkrd_str?: string | null;
          SKU_pp_bkgr_2to?: string | null;
          SKU_pp_bkgr_str?: string | null;
          SKU_pp_bkrd_2to?: string | null;
          SKU_pp_bkrd_str?: string | null;
          SKU_pp_grbk_str?: string | null;
          SKU_pp_grbk_tri?: string | null;
          SKU_ps_gr_1to?: string | null;
          SKU_sp_gr_1to?: string | null;
          SKU_ss_gr_1to?: string | null;
          sub1_id?: string | null;
          sub2_id?: string | null;
          sub3_id?: string | null;
          submodel1?: string | null;
          submodel2?: string | null;
          submodel3?: string | null;
          type?: string | null;
          uc_description?: string | null;
          uc_image_link?: string | null;
          uc_title?: string | null;
          year_generation?: string | null;
          year_id?: string | null;
          year_options?: string | null;
        };
        Relationships: [];
      };
      'Products-2024': {
        Row: {
          base_sku: string | null;
          display_color: string | null;
          display_id: string | null;
          feature: string | null;
          make: string | null;
          model: string | null;
          msrp: string | null;
          price: string | null;
          product: string | null;
          product_name: string | null;
          product_type: string | null;
          sku: string;
          sku_suffix: string | null;
          submodel1: string | null;
          submodel2: string | null;
          type: string | null;
          year_generation: string | null;
        };
        Insert: {
          base_sku?: string | null;
          display_color?: string | null;
          display_id?: string | null;
          feature?: string | null;
          make?: string | null;
          model?: string | null;
          msrp?: string | null;
          price?: string | null;
          product?: string | null;
          product_name?: string | null;
          product_type?: string | null;
          sku: string;
          sku_suffix?: string | null;
          submodel1?: string | null;
          submodel2?: string | null;
          type?: string | null;
          year_generation?: string | null;
        };
        Update: {
          base_sku?: string | null;
          display_color?: string | null;
          display_id?: string | null;
          feature?: string | null;
          make?: string | null;
          model?: string | null;
          msrp?: string | null;
          price?: string | null;
          product?: string | null;
          product_name?: string | null;
          product_type?: string | null;
          sku?: string;
          sku_suffix?: string | null;
          submodel1?: string | null;
          submodel2?: string | null;
          type?: string | null;
          year_generation?: string | null;
        };
        Relationships: [];
      };
      Skus: {
        Row: {
          data: Json | null;
          id: number;
          make: string | null;
          model: string | null;
          model_id: number | null;
          sku: string | null;
        };
        Insert: {
          data?: Json | null;
          id?: number;
          make?: string | null;
          model?: string | null;
          model_id?: number | null;
          sku?: string | null;
        };
        Update: {
          data?: Json | null;
          id?: number;
          make?: string | null;
          model?: string | null;
          model_id?: number | null;
          sku?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'Skus_model_id_fkey';
            columns: ['model_id'];
            isOneToOne: false;
            referencedRelation: 'Models';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_car_covers: {
        Args: Record<PropertyKey, never>;
        Returns: {
          make: string;
          models: string[];
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never;
