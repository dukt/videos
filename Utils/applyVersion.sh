#!/bin/bash

cd ./Source/videos/

# Create Info.php with plugin version constant

cat > Info.php << EOF
<?php
namespace Craft;

define('VIDEOS_VERSION', '${PLUGIN_VERSION}');

EOF