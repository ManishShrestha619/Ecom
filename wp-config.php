<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecom' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'w,1Cx{!.Vw0l!z#~9OeXUIPDYnjDHiKJ?vkP(%K:yk=r*]zYD55?bXDg^+Ws{^y8' );
define( 'SECURE_AUTH_KEY',  ' ^{~?LSt9%CSbKZ(gqhQ}CB#OxH-_XW!q`A]q8s78~>1^#pj_y{H9`VS.OW5-~@]' );
define( 'LOGGED_IN_KEY',    'abJ*n=:2MpXbE3v18g{yrH@u?l3S6o7sXQYxcn5o+aXfWNuo2/G%?_GtxG)=$)0:' );
define( 'NONCE_KEY',        'j~dp.8I{KW@=mCo/z<2z<8XW62`Y/Dz(U%ioHvS{LYY6nCRRmR<XAPd-FlNQJ$T^' );
define( 'AUTH_SALT',        'fD0i;X} DE;-;fvLWI1{RZuCEn$b4x@;78/wuO|kSv#,9j,D,>YbgcWn%cui~0@d' );
define( 'SECURE_AUTH_SALT', 'M4 *We7=@Q42u{QdE_GzdEEI6)}}}~L:E~XLP-GN9qJPh2]i8J;qcYS-_tvYT.QO' );
define( 'LOGGED_IN_SALT',   'sQ~RrisHjVtlYy!nKhf_lC=U<aF5%<W:iIor![os^_8Ao;p(i*Nn?+E77JGXlD1_' );
define( 'NONCE_SALT',       'wwY7J)HYbP/7t;f2BpraMnJo}lU,)-?)ZV468_%`anUY8l/WCxaF*_)flLgNJj<r' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define( 'JETPACK_DEV_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
