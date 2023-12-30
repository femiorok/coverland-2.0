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
      MakeProductTypeLink: {
        Row: {
          id: number;
          make_id: number | null;
          product_type_id: number | null;
        };
        Insert: {
          id?: number;
          make_id?: number | null;
          product_type_id?: number | null;
        };
        Update: {
          id?: number;
          make_id?: number | null;
          product_type_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'MakeProductTypeLink_make_id_fkey';
            columns: ['make_id'];
            isOneToOne: false;
            referencedRelation: 'Vehicle-Makes';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'MakeProductTypeLink_product_type_id_fkey';
            columns: ['product_type_id'];
            isOneToOne: false;
            referencedRelation: 'Product-Types';
            referencedColumns: ['id'];
          }
        ];
      };
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
      MakeYearLink: {
        Row: {
          id: number;
          make_id: number | null;
          year_id: number | null;
        };
        Insert: {
          id?: number;
          make_id?: number | null;
          year_id?: number | null;
        };
        Update: {
          id?: number;
          make_id?: number | null;
          year_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'MakeYearLink_make_id_fkey';
            columns: ['make_id'];
            isOneToOne: false;
            referencedRelation: 'Vehicle-Makes';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'MakeYearLink_year_id_fkey';
            columns: ['year_id'];
            isOneToOne: false;
            referencedRelation: 'Vehicle-Years';
            referencedColumns: ['id'];
          }
        ];
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
      Orders: {
        Row: {
          billing_address: Json | null;
          discount_total: number | null;
          email: string | null;
          first_name: string | null;
          id: number;
          last_name: string | null;
          order_id: string | null;
          order_placed: string | null;
          order_subtotal: number | null;
          order_total: number | null;
          phone_number: string | null;
          shipping_address: Json | null;
          shipping_method: string | null;
          shipping_total: number | null;
          user_cart: Json | null;
        };
        Insert: {
          billing_address?: Json | null;
          discount_total?: number | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          order_id?: string | null;
          order_placed?: string | null;
          order_subtotal?: number | null;
          order_total?: number | null;
          phone_number?: string | null;
          shipping_address?: Json | null;
          shipping_method?: string | null;
          shipping_total?: number | null;
          user_cart?: Json | null;
        };
        Update: {
          billing_address?: Json | null;
          discount_total?: number | null;
          email?: string | null;
          first_name?: string | null;
          id?: number;
          last_name?: string | null;
          order_id?: string | null;
          order_placed?: string | null;
          order_subtotal?: number | null;
          order_total?: number | null;
          phone_number?: string | null;
          shipping_address?: Json | null;
          shipping_method?: string | null;
          shipping_total?: number | null;
          user_cart?: Json | null;
        };
        Relationships: [];
      };
      'Product-Promo-Codes': {
        Row: {
          created_at: string;
          discount_type: string | null;
          discount_value: number | null;
          expiry_date: string | null;
          id: number;
          level: string | null;
          minimum_purchase: number | null;
          name: string | null;
          product_skus: string | null;
        };
        Insert: {
          created_at?: string;
          discount_type?: string | null;
          discount_value?: number | null;
          expiry_date?: string | null;
          id?: number;
          level?: string | null;
          minimum_purchase?: number | null;
          name?: string | null;
          product_skus?: string | null;
        };
        Update: {
          created_at?: string;
          discount_type?: string | null;
          discount_value?: number | null;
          expiry_date?: string | null;
          id?: number;
          level?: string | null;
          minimum_purchase?: number | null;
          name?: string | null;
          product_skus?: string | null;
        };
        Relationships: [];
      };
      'Product-Reviews': {
        Row: {
          created_at: string;
          id: number;
          make: string | null;
          model: string | null;
          product_name: string | null;
          product_type: string | null;
          rating_stars: string | null;
          review_author: string | null;
          review_description: string | null;
          review_image: string | null;
          review_title: string | null;
          sku: string | null;
          sku_id: number | null;
          submodel1: string | null;
          submodel2: string | null;
          type: string | null;
          year_generation: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          make?: string | null;
          model?: string | null;
          product_name?: string | null;
          product_type?: string | null;
          rating_stars?: string | null;
          review_author?: string | null;
          review_description?: string | null;
          review_image?: string | null;
          review_title?: string | null;
          sku?: string | null;
          sku_id?: number | null;
          submodel1?: string | null;
          submodel2?: string | null;
          type?: string | null;
          year_generation?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          make?: string | null;
          model?: string | null;
          product_name?: string | null;
          product_type?: string | null;
          rating_stars?: string | null;
          review_author?: string | null;
          review_description?: string | null;
          review_image?: string | null;
          review_title?: string | null;
          sku?: string | null;
          sku_id?: number | null;
          submodel1?: string | null;
          submodel2?: string | null;
          type?: string | null;
          year_generation?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'Product-Reviews_make_fkey';
            columns: ['make'];
            isOneToOne: false;
            referencedRelation: 'Makes';
            referencedColumns: ['make'];
          },
          {
            foreignKeyName: 'Product-Reviews_sku_fkey';
            columns: ['sku'];
            isOneToOne: false;
            referencedRelation: 'Skus';
            referencedColumns: ['sku'];
          }
        ];
      };
      'Product-Types': {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
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
          generation_default: string | null;
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
          generation_default?: string | null;
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
          generation_default?: string | null;
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
          generation_end: number | null;
          generation_start: number | null;
          make: string | null;
          make_slug: string | null;
          model: string | null;
          model_slug: string | null;
          msrp: string | null;
          price: string | null;
          product: string | null;
          product_name: string | null;
          product_type: string | null;
          product_url_slug: string | null;
          sku: string;
          sku_suffix: string | null;
          submodel1: string | null;
          submodel1_slug: string | null;
          submodel2: string | null;
          submodel2_slug: string | null;
          type: string | null;
          year_generation: string | null;
        };
        Insert: {
          base_sku?: string | null;
          display_color?: string | null;
          display_id?: string | null;
          feature?: string | null;
          generation_end?: number | null;
          generation_start?: number | null;
          make?: string | null;
          make_slug?: string | null;
          model?: string | null;
          model_slug?: string | null;
          msrp?: string | null;
          price?: string | null;
          product?: string | null;
          product_name?: string | null;
          product_type?: string | null;
          product_url_slug?: string | null;
          sku: string;
          sku_suffix?: string | null;
          submodel1?: string | null;
          submodel1_slug?: string | null;
          submodel2?: string | null;
          submodel2_slug?: string | null;
          type?: string | null;
          year_generation?: string | null;
        };
        Update: {
          base_sku?: string | null;
          display_color?: string | null;
          display_id?: string | null;
          feature?: string | null;
          generation_end?: number | null;
          generation_start?: number | null;
          make?: string | null;
          make_slug?: string | null;
          model?: string | null;
          model_slug?: string | null;
          msrp?: string | null;
          price?: string | null;
          product?: string | null;
          product_name?: string | null;
          product_type?: string | null;
          product_url_slug?: string | null;
          sku?: string;
          sku_suffix?: string | null;
          submodel1?: string | null;
          submodel1_slug?: string | null;
          submodel2?: string | null;
          submodel2_slug?: string | null;
          type?: string | null;
          year_generation?: string | null;
        };
        Relationships: [];
      };
      ProductTypeYearLink: {
        Row: {
          id: number;
          product_type_id: number | null;
          vehicle_year_id: number | null;
        };
        Insert: {
          id?: number;
          product_type_id?: number | null;
          vehicle_year_id?: number | null;
        };
        Update: {
          id?: number;
          product_type_id?: number | null;
          vehicle_year_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'ProductTypeYearLink_product_type_id_fkey';
            columns: ['product_type_id'];
            isOneToOne: false;
            referencedRelation: 'Product-Types';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'ProductTypeYearLink_vehicle_year_id_fkey';
            columns: ['vehicle_year_id'];
            isOneToOne: false;
            referencedRelation: 'Vehicle-Years';
            referencedColumns: ['id'];
          }
        ];
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
      'Vehicle-Makes': {
        Row: {
          default_make_images: string | null;
          id: number;
          name: string;
        };
        Insert: {
          default_make_images?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          default_make_images?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      'Vehicle-Years': {
        Row: {
          created_at: string;
          id: number;
          year: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          year?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          year?: string | null;
        };
        Relationships: [];
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
